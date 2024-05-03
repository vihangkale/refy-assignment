import Image from "next/image";
import Heading from "../ui/heading";
import hero from "../assets/aboutHero.svg";
import { poppins } from "../ui/font";
export default function Page() {
  return (
    <div className="flex flex-col gap-y-[60px] py-[175.51px] px-[30px] bg-white">
      <Heading text="About Us" className="text-center" />
      <div className="flex flex-col md:flex-row gap-[40px] items-center">
        <p
          className={`${poppins.className} text-[18px] font-normal leading-[30px] text-[#5A5A5A] w-full md:w-2/4`}
        >
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </p>
        <Image className="w-full md:w-2/4" src={hero} alt="about" />
      </div>
      <div
        className={`${poppins.className} flex flex-col gap-[30px] text-[18px] font-normal leading-[30px] text-[#5A5A5A]`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </p>
      </div>
    </div>
  );
}
