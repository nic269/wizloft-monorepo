"use client";
import { Button } from "@wizloft/ui/components/button";
import { toast } from "@wizloft/ui/components/sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@wizloft/ui/components/alert-dialog"
import { FieldDescription, FieldLabel } from "@wizloft/ui/components/field";

import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@wizloft/ui/components/card";

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
						<ol>
							<li>
								Get started by editing <code>apps/web/app/page.tsx</code>
							</li>
							<li>Save and see your changes instantly.</li>
						</ol>
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

						<Button
							className="w-full"
							variant="default"
							size="lg"
							onClick={() => toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
								loading: "Loading...",
								success: "Success!",
								error: "Error!",
							})}>
							Loading alert demo
						</Button>
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}
