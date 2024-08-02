import Image from "next/image";
import Link from "next/link";
import React from "react";

type BoxButtonProps = {
  label: string;
  route: string;
  image: string;
};

const BoxButton = ({ label, route, image }: BoxButtonProps) => {
  return (
    <>
      <div className="flex-center flex-col gap-5">
        <Link href={route}>
          <div className="flex-center w-52 border-2 h-52 bg-orange-500 hover:bg-orange-400 rounded-3xl shadow-xl hover:shadow-inner">
            <Image src={image} width={94} height={94} alt={label} />
          </div>
        </Link>
        <p className="uppercase">{label}</p>
      </div>
    </>
  );
};

export default BoxButton;
