import { Card } from "flowbite-react";

const Introduction = () => {
  return (
    <Card className="mx-20 rounded-3xl bg-lime-100 px-10 py-5">
      <h1 className="text-5xl font-extrabold">Hi there!</h1>
      <p className="mt-5 text-3xl">
        I&apos;m a Computer Engineering student at the University of Waterloo.
        I work with a variety of languages & frameworks to deliver software
        that exceed expectations and perform well.
      </p>
    </Card>
  );
};

export default Introduction;
