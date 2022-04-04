import React from "react";

import Link from "next/link";

type MaskingNextProps = {
  html: HTMLElement;
  search: string;
};

const MaskingNext = ({html, search}: MaskingNextProps) => (
  <Link as={`/search/${search}`} href="">
    <a>{html}</a>
  </Link>
);

export default MaskingNext;
