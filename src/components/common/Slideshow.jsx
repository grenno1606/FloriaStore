import { twMerge } from "tailwind-merge";
import { Button } from "../buttons/Button";
const getEffects = (effectName) => {
  switch (effectName) {
    case "effect1":
      return {
        titleSmall: "leftToRight",
        titleBig: "flip",
        description: "rightToLeft",
        button: "scaleAndMove",
      };
    case "effect2":
      return {
        titleSmall: "downToUp",
        titleBig: "downToUp",
        description: "downToUp",
        button: "downToUp",
      };
    case "effect3":
      return {
        titleSmall: "upToDown",
        titleBig: "scale",
        description: "leftToRight",
        button: "rightToLeft",
      };
    default:
      throw new Error("EFFECT NOT FOUND");
  }
};

export const Slideshow = ({
  image,
  titleSmall,
  titleBig,
  description,
  className,
  effectName = "",
}) => {
  const effects = getEffects(effectName);
  return (
    <div className="relative h-[450px] md:h-[500px] lg:h-[580px] xl:h-[700px] 2xl:h-[1000px]">
      <img
        className="object-cover object-center w-full h-full"
        src={image}
        alt={titleSmall}
      />
      <div
        className={twMerge(
          "absolute top-1/2 left-6 -translate-y-1/2 group",
          className
        )}
      >
        <p
          className={twMerge(
            "uppercase text-lg font-semibold lg:font-bold pb-4 tracking-[5px] transition",
            effects.titleSmall
          )}
        >
          {titleSmall}
        </p>
        <p
          className={twMerge(
            "text-3xl font-medium pb-[15px] sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[100px] transition",
            effects.titleBig
          )}
        >
          {titleBig}
        </p>
        <p
          className={twMerge(
            "text-[19px] font-semibold pb-[15px] sm:text-2xl mb-[30px] md:text-2xl transition",
            effects.description
          )}
        >
          {description}
        </p>
        <Button color="primary" size="sm" className={twMerge(effects.button)}>
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};
