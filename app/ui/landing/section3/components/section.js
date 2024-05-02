import Text from "./text";
import ImageText from "./imageText";
import Card from "./card";
export default function Section({ data }) {
  console.log(data, "data in section");
  return (
    <>
      {data?.type === "text" && <Text data={data} />}
      {data?.type === "imageText" && <ImageText data={data} />}
      {data?.type === "card" && (
        <Card>
          <ImageText data={data} />
        </Card>
      )}
    </>
  );
}
