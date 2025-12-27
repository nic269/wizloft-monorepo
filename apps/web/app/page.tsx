"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@wizloft/ui/components/alert-dialog"
import { Button } from "@wizloft/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@wizloft/ui/components/card";
import { toast } from "@wizloft/ui/components/sonner";
import { log } from "@wizloft/logger";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { getUsers } from "./actions";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
	srcLight: string;
	srcDark: string;
};

const ThemeImage = (props: Props) => {
	const { srcLight, srcDark, ...rest } = props;

	return (
		<>
			<Image {...rest} src={srcLight} className="imgLight" />
			<Image {...rest} src={srcDark} className="imgDark" />
		</>
	);
};

export default function Home() {
	const [users, setUsers] = useState<Array<{ id: string; name: string | null; email: string | null; emailVerified: Date | null }>>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const fetchedUsers = await getUsers();
				setUsers(fetchedUsers);
			} catch (error) {
				console.error("Failed to fetch users:", error);
				toast.error("Failed to load users");
			} finally {
				setLoading(false);
			}
		}
		fetchUsers()
	}, []);
	log("Users fetched", users);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.header}>
					<ThemeImage
						className={styles.logo}
						srcLight="wizloft-logo-black.svg"
						srcDark="wizloft-logo-white.svg"
						alt="Wizloft logo"
						width={180}
						height={38}
						priority
					/>
				</div>

				<Card>
					<CardHeader>
						<CardTitle><h2 className="text-2xl font-bold text-center">Wizloft by Anh Nguyen</h2></CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<ol>
								<li>
									Get started by editing <code>apps/web/app/page.tsx</code>
								</li>
								<li>Save and see your changes instantly.</li>
							</ol>
							<div className="mt-4">
								<h3 className="text-lg font-semibold mb-2">Users ({users.length})</h3>
								{loading ? (
									<p className="text-sm text-muted-foreground">Loading users...</p>
								) : users.length === 0 ? (
									<p className="text-sm text-muted-foreground">No users found.</p>
								) : (
									<ul className="space-y-2">
										{users.map((user) => (
											<li key={user.id} className="text-sm">
												<div className="flex gap-2">
													<span className="font-medium">{user.name || "Unnamed"}</span>
													{user.email && (
														<span className="text-muted-foreground">({user.email})</span>
													)}
												</div>
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						<AlertDialog>
							<AlertDialogTrigger render={Button({ variant: 'outline', size: 'lg', className: 'w-full' })}>
								Contact me
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Contact me</AlertDialogTitle>
								</AlertDialogHeader>
								<div>
									<div className="flex gap-2">
										<p className="text-sm font-medium">Phone number:</p>
										<p className="text-sm text-muted-foreground"><a href="tel:+84973295110" className="underline">(+84) 973 295 110</a></p>
									</div>
									<div className="flex gap-2 mt-2">
										<p className="text-sm font-medium">Email:</p>
										<p className="text-sm text-muted-foreground"><a href="mailto:anh.nguyen@wizloft.com" className="underline">anh.nguyen@wizloft.com</a></p>
									</div>
								</div>
								<AlertDialogFooter>
									<AlertDialogCancel>Close</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}
