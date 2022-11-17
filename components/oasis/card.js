import { format, fromUnixTime } from "date-fns";

const Card = ({ post }) => {
  const content = post.content;
  const name = post.name;
  const time = fromUnixTime(post.time);

  return (
    <div className="m-4 p-4 border break-words">
      <div className="flex flex-col mb-4 md:justify-between">
        <h3 className="font-quantico text-lg font-bold">{name}</h3>
        <time className="font-quantico text-sm italic">
          {format(time, "dd LLLL yyyy")}
        </time>
      </div>

      <div>
        <article>
          {content?.map((paragraph) => {
            return paragraph.children.map(({ text }) => {
              if (text === "") {
                // eslint-disable-next-line
                return <br />;
              }
              return (
                <p className="font-quantico text-base" key={text}>
                  {text}
                </p>
              );
            });
          })}
        </article>
      </div>
    </div>
  );
};

export default Card;
