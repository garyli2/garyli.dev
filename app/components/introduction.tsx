import { Card } from "flowbite-react";

const Introduction = () => {
  return (
    <Card className="flex gap-5 rounded-3xl bg-lime-100 p-2 md:gap-10 md:p-5 md:px-10">
      <h1 className="text-3xl font-bold md:text-5xl">Hi there!</h1>
      <p className="text-xl md:text-3xl">
        I&apos;m a <strong>Computer Engineering</strong> student at the <strong>University of Waterloo</strong>.
        I work with a variety of languages & frameworks to deliver software
        that exceed expectations and perform well.
      </p>
    </Card>
  );
};

export default Introduction;
