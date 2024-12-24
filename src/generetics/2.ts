type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType, U extends keyof AllType>(
  top: Pick<AllType, T | "name" | "color">,
  bottom: Pick<AllType, U | "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
