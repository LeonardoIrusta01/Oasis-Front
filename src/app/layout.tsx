"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { StoreProvider } from "@/redux/provider";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from "dotenv";
dotenv.config();

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const client_id = process.env.CLIENT_ID;

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Oasis</title>
      </head>
      <body>
        <Auth0Provider
          domain="dev-oasis.us.auth0.com"
          clientId="gez6UzHetekBd1LomKU6g39OSME3yJSV"
          authorizationParams={{redirect_uri: window.location.origin}}
        >
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}