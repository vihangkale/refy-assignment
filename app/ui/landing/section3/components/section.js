import Text from "./text";
import ImageText from "./imageText";
import Card from "./card";
export default function Section({ data }) {
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
