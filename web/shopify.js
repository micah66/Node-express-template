import { ApiVersion } from '@shopify/shopify-api';
import { shopifyApp } from '@shopify/shopify-app-express';
import { PrismaSessionStorage } from '@shopify/shopify-app-session-storage-prisma';
import { restResources } from '@shopify/shopify-api/rest/admin/2023-10';
import prisma from './prisma/index.js';
import dotenv from 'dotenv';
dotenv.config();

const shopify = shopifyApp({
	api: {
		apiVersion: ApiVersion.October23,
		restResources,
		apiKey: process.env.API_KEY,
		apiSecretKey: process.env.API_SECRET_KEY,
		scopes: ['read_customers', 'read_orders'],
		hostName: 'localhost:65070',
	},
	auth: {
		path: '/api/auth',
		callbackPath: '/api/auth/callback',
	},
	webhooks: {
		path: '/api/webhooks',
	},
	// This should be replaced with your preferred storage strategy
	sessionStorage: new PrismaSessionStorage(prisma),
});

export default shopify;
