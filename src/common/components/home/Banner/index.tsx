import { notFound } from "next/navigation";

import CoverImage from "./CoverImage";

async function BannerHome() {
  return <CoverImage />;
}

export default BannerHome;
