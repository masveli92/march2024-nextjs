import React from "react";
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}> Home </Link>
                </li>
                <li>
                    <Link href={'/users'}> Users </Link>
                </li>
                <li>
                    <Link href={'/posts'}> Posts </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;