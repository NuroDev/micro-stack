CREATE TABLE `account` (
	`access_token` text,
	`expires_at` integer,
	`id_token` text,
	`provider` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`refresh_token` text,
	`scope` text,
	`session_state` text,
	`token_type` text,
	`type` text NOT NULL,
	`userId` text NOT NULL,
	PRIMARY KEY(`provider`, `providerAccountId`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `comments` (
	`author` text NOT NULL,
	`content` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `session` (
	`expires` integer NOT NULL,
	`sessionToken` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`email` text NOT NULL,
	`emailVerified` integer,
	`id` text PRIMARY KEY NOT NULL,
	`image` text,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`expires` integer NOT NULL,
	`identifier` text NOT NULL,
	`token` text NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
