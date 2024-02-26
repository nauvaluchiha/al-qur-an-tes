import { Metadata } from "next";
import SurahList from "../_components/surah-list";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Al-Qur'an Indonesia",
  description: "Al-Qur'an Indonesia",
};

export default async function Page() {
  // await new Promise((res) => setTimeout(res, 4000));
  return (
    <>
      {/* <Suspense fallback="..."> */}
        <SurahList />
      {/* </Suspense> */}
    </>
  );
}
