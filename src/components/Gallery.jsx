import React from "react";

export default function Gallery({ imgs_folder }) {
    return (
        <div className="lg:columns-4 gap-6">
            {imgs_folder.map((img, index) => (
            <div key={index} className="mb-6 break-inside">
                <Img path={img} />
            </div>
            ))}
        </div>
    );
}

function Img({ path }) {
    return (
        <img
        src={path}
        className="block w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        loading="lazy"
        />
    );
}