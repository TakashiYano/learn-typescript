/* eslint-disable @next/next/no-img-element */

type User = {
  name: string;
  accountName: string;
  image: string;
};

type Body = {
  text: string;
  image?: string;
};

type Analytics = {
  path: string;
  count: number;
}[];

type CommonProps = {
  user: User;
  body: Body;
  analytics: Analytics;
};

type TweetProps = {
  type: "tweet";
};

type RetweetProps = {
  type: "retweet";
  retweetedUser: string;
};

type PromotionProps = {
  type: "promotion";
};

type TwitterCardProps = CommonProps &
  (TweetProps | RetweetProps | PromotionProps);

export const TwitterCard = (props: TwitterCardProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-200 pt-20 pb-80">
      <div className="min-w-[480px] max-w-xl rounded-xl border border-gray-200 bg-white p-4">
        {props.type === "retweet" || props.type === "promotion" ? (
          <div className="mb-2 text-sm text-gray-500">
            {props.type === "retweet"
              ? `${props.retweetedUser}さんがリツイートしました`
              : "プロモーション広告"}
          </div>
        ) : null}
        {/* ユーザー */}
        <div className="flex items-center">
          <img
            className="h-11 w-11 rounded-full"
            src={props.user.image}
            alt=""
          />
          <div className="ml-1.5 text-sm leading-tight">
            <span className="block font-bold text-black ">
              {props.user.name}
            </span>
            <span className="block font-normal text-gray-500">{`@${props.user.accountName}`}</span>
          </div>
        </div>
        {/* 本文 */}
        <p className="mt-3 block text-xl leading-snug text-black">
          {props.body.text}
        </p>
        {props.body.image ? (
          <img
            className="mt-2 rounded-2xl border border-gray-100"
            src={props.body.image}
            alt=""
          />
        ) : null}
        <p className="my-0.5 py-1 text-base text-gray-500">
          11:22 AM · 2021年12月1日
        </p>
        {/* 統計 */}
        <div className="my-1 border border-b-0 border-gray-200" />
        <div className="mt-3 flex text-gray-500">
          {props.analytics.map(({ count, path }) => {
            return (
              <div key={path} className="mr-6 flex items-center">
                <svg className="h-5 w-auto fill-current" viewBox="0 0 24 24">
                  <g>
                    <path d={path}></path>
                  </g>
                </svg>
                <span className="ml-3">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
