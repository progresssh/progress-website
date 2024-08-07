import Link from "next/link";
import { StarPost } from "../../types/starPost";

const StarCard = ( { data }  : {data: StarPost} ) => {
  const title = data.title;
  const unixTime = data.time

  return (
    <Link href={`star/${data.key}`}>
    <div className="m-4 p-4 break-words border-2 border-dashed border-rose-600 text-rose-600 hover:border-rose-100 hover:text-rose-100 hover:animate-pulse">
      
      <div className="flex flex-col md:justify-between">
        <h3 className="font-quantico text-lg font-bold">{title}</h3>
        <time className="font-quantico text-sm italic">
          Star #{unixTime}
        </time>
      </div>
      
    </div>
    </Link>
  );
};

export default StarCard;
