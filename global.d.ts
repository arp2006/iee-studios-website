import React from "react";
declare module "*.css";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": any;
    }
  }
}