import React from "react";

const ClubContent = ({ club }) => {
    return (
        <div className="grid grid-rows-1 md:grid-cols-2 lg:my-20 gap-4">
            <div className="flex justify-center items-center">
                <img
                    src={club.url}
                    className="rounded-lg h-100 lg:h-150 max-w-full" />
            </div>
            <div className="grid grid-rows-3 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                    <img src="" className="w-16 h-16 rounded-full" />
                    <h3 className="text-2xl font-bold">{club.captain_boys}</h3>
                    <h5 className="text-md">Captain</h5>
                </div>
                <div className="flex flex-col items-center">
                    <img src="" className="w-16 h-16 rounded-full" />
                    <h3 className="text-2xl font-bold">{club.captain_girls}</h3>
                    <h5 className="text-md">Captain</h5>
                </div>
                <div className="flex flex-col items-center">
                    <img src="" className="w-16 h-16 rounded-full" />
                    <h3 className="text-2xl font-bold">{club.vice_captain_boys}</h3>
                    <h5 className="text-md">Vice Captain</h5>
                </div>
                <div className="flex flex-col items-center">
                    <img src="" className="w-16 h-16 rounded-full" />
                    <h3 className="text-2xl font-bold">{club.vice_captain_girls}</h3>
                    <h5 className="text-md">Vice Captain</h5>
                </div>
                <div className="col-span-2 grid grid-rows-1 grid-cols-3 gap-4 my-10">
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg">Silver</h3>
                        <h5 className="text-md">5</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg">Gold</h3>
                        <h5 className="text-md">5</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg">Bronze</h3>
                        <h5 className="text-md">5</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClubContent;