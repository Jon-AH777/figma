import * as React from "react";
import TeamMember from "./TeamMember";
import StatsBlock from "./StatBlock";
import FormBlock from "./FormBlock";

function MyComponent() {
  const statsData = [
    { number: "15K", label: "Happy Customers" },
    { number: "150K", label: "Monthly Visitors" },
    { number: "15", label: "Countries Worldwide" },
    { number: "100+", label: "Top Partners" },
  ];

  const teamMembers = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb31d5680da0e5802d39ffd1f50788393f1656993bb8afbda0135444b343354?apiKey=42381fea584f4204ac9b9a56f9f64520&",
      name: "Username 1",
      profession: "Profession 1",
      socialIcons: [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/43a0f0ed305b11727cfe200532ca1154ae1967a0479dcaa813b8372dc31cbbc1?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 1",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ff1f86d53589b090934c64c5721322b20086427d8e68a9f06b2b902ec43fa4b?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 2",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c894ff97bc83b5bc179a11c21ae85688bd4890f35d8093b95cb37ff9884e8f43?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 3",
        },
      ],
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6b84b2305691b0bbf9e046def7382783896620496820e1427f51dee5fbb92c74?apiKey=42381fea584f4204ac9b9a56f9f64520&",
      name: "Username 2",
      profession: "Profession 2",
      socialIcons: [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3533083c6623d0abc9b9a094e0640d7ef7aa3ee3a4ccff9888d3adc7267516b3?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 1",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/981348a297f50d0b01c272f26016c5ee00f504c70b923a23676d913691cedc81?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 2",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/31497a0246a6d24d08f10e80c58c7d48f03138d4d0deab85ae2b812ee5940e1d?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 3",
        },
      ],
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/15fd8e19f0b5617c5a787be6f1395d7362621989aa4ef3a2e9e113c4ce22ec61?apiKey=42381fea584f4204ac9b9a56f9f64520&",
      name: "Username 3",
      profession: "Profession 3",
      socialIcons: [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/66ebfce4a28b8c68e0ab6c35c2477c10270f7aaf34a9ef5efdd635c2b3f9b520?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 1",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/119b7e6f01a45911f1e2ee775f2041de0313e4fd8c8521ef9a034340593cf077?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 2",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e7290e3d31c8aedcde6a156156c9183eabc5690d05ef1a15b1d58f86082eae2?apiKey=42381fea584f4204ac9b9a56f9f64520&",
          alt: "Social Icon 3",
        },
      ],
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="overflow-hidden px-20 pt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-3 mr-0 w-full font-bold max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-w-full whitespace-nowrap w-[503px]">
                <div className="text-2xl tracking-normal leading-none text-slate-800">
                  Bandage
                </div>
                <div className="flex overflow-hidden gap-5 items-center my-auto text-sm tracking-wide leading-6 text-center text-neutral-500">
                  <div className="overflow-hidden self-stretch my-auto w-[43px]">
                    Home
                  </div>
                  <div className="overflow-hidden self-stretch my-auto w-[59px]">
                    Product
                  </div>
                  <div className="overflow-hidden self-stretch my-auto w-[52px]">
                    Pricing
                  </div>
                  <div className="overflow-hidden self-stretch my-auto w-[58px]">
                    Contact
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col justify-center py-28 mt-11 w-full tracking-wide text-slate-800 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden gap-8 items-center max-md:max-w-full">
                  <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[599px]">
                    <div className="text-base tracking-normal">
                      ABOUT COMPANY
                    </div>
                    <div className="mt-9 text-6xl leading-none max-md:max-w-full max-md:text-4xl">
                      ABOUT US
                    </div>
                    <div className="mt-9 text-xl leading-8 text-neutral-500">
                      We know how large objects will act, <br />
                      but things on a small scale
                    </div>
                    <div className="flex gap-2.5 items-start self-start mt-9 text-sm leading-loose text-center text-white">
                      <div className="overflow-hidden px-10 py-4 bg-sky-500 rounded-md max-md:px-5">
                        Get Quote Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dac14e57-a815-4c31-bc71-0f0555f9989a?apiKey=42381fea584f4204ac9b9a56f9f64520&"
              alt=""
              className="object-contain grow w-full aspect-[0.89] max-md:mt-5 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1018px]">
            <div className="flex flex-col grow shrink justify-center self-stretch py-6 my-auto min-w-[240px] w-[315px]">
              <div className="flex flex-col max-w-full w-[394px]">
                <div className="text-sm tracking-wide leading-none text-red-500">
                  Problems trying
                </div>
                <div className="mt-6 text-2xl font-bold tracking-normal leading-8 text-slate-800">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent.
                </div>
              </div>
            </div>
            <div className="overflow-hidden grow shrink self-stretch my-auto text-sm tracking-wide leading-5 min-w-[240px] text-neutral-500 w-[450px] max-md:max-w-full">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full font-bold text-center bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
          <StatsBlock stats={statsData} />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13fa0defdf708b0c649624ceac8771a3a3cd78e2ed11e8d051be1c0003db624c?apiKey=42381fea584f4204ac9b9a56f9f64520&"
          alt=""
          className="object-contain mb-0 w-full aspect-[1.83] max-w-[989px] max-md:mb-2.5 max-md:max-w-full"
        />
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 pb-2 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[607px]">
            <div className="flex overflow-hidden flex-col items-center w-full">
              <div className="text-4xl font-bold leading-none text-slate-800">
                Meet Our Team
              </div>
              <div className="mt-2.5 text-sm leading-5 text-center text-neutral-500 max-md:max-w-full">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-28 max-md:mt-10 max-md:max-w-full">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                imgSrc={member.imgSrc}
                name={member.name}
                profession={member.profession}
                socialIcons={member.socialIcons}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[864px]">
            <div className="flex overflow-hidden flex-col items-center w-full">
              <div className="text-4xl font-bold leading-none text-slate-800 max-md:max-w-full">
                Big Companies Are Here
              </div>
              <div className="mt-8 text-sm leading-5 text-center text-neutral-500 w-[547px] max-md:max-w-full">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 mt-6 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[153px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94dbdd2a46866bcda5432560012779af09f1d50a989344d4db8107598dce1aba?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                alt="Company Logo 1"
                className="object-contain max-w-full aspect-[3.03] w-[103px]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[146px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c334832f55c9f5c55210b88f83fb6d6e45e0ae550ca4009f88e8fd8b01706468?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                alt="Company Logo 2"
                className="object-contain aspect-[1.41] w-[83px]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[152px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3b6a1ef5c546d8ac31ff5b1cd23b4f33e339e5f210f1a6623b304794306e0f6?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                alt="Company Logo 3"
                className="object-contain max-w-full aspect-[1.36] w-[102px]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c48e1ae114e4491f2a370c3cd716c074cdd4ef0d3f331ed8e6da21e269f2c0?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                alt="Company Logo 4"
                className="object-contain max-w-full aspect-[2.45] w-[103px]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c88c6c09c9cb95e9eb50d4fa0788428b3d2f76b1673032db3025982cbf1ce4e?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                alt="Company Logo 5"
                className="object-contain max-w-full aspect-[1.68] w-[104px]"
              />
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[151px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5415e74a54c66f9b2a0f11da99e617d0bd9f49f3c6e0fd01670118d7a429c62f?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                alt="Company Logo 6"
                className="object-contain aspect-[1.06] w-[76px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden pl-20 w-full bg-sky-600 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden z-10 flex-col justify-center py-28 mr-0 w-full text-sm font-bold tracking-wide text-white max-md:py-24 max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center max-w-full w-[1050px]">
                <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[438px] max-md:max-w-full">
                  <div className="text-base tracking-normal">WORK WITH US</div>
                  <div className="mt-6 text-4xl leading-none max-md:max-w-full">
                    Now Let’s grow Yours
                  </div>
                  <div className="mt-6 leading-5 max-md:max-w-full">
                    The gradual accumulation of information about atomic and
                    small-scale behavior during the first quarter of the 20th{" "}
                  </div>
                  <div className="overflow-hidden self-start px-10 py-4 mt-6 leading-loose text-center whitespace-nowrap rounded-md border border-solid border-neutral-50 text-neutral-50 max-md:px-5">
                    Button
                  </div>
                </div>
                <div className="flex shrink-0 self-stretch my-auto h-[412px] min-w-[240px] w-[548px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42aa9543b7f6187e1a4cecf63feec11741ebeb42f5a3410d4530d8b9e9a9d1f?apiKey=42381fea584f4204ac9b9a56f9f64520&"
              alt=""
              className="object-contain grow w-full aspect-[0.93] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center self-center py-10 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap items-center max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
              <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                Bandage
              </div>
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
              <div className="flex overflow-hidden gap-5 justify-center items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e79d635f6f6f66c097f75a35949098f50ebe3963c029447d9b3c93ffeeca97a6?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                  alt="Social Media Icon 1"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2dba9e986de386aaeb22b5d7c77c30c41888e06531bb11b7463a5c536f6a9fd?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                  alt="Social Media Icon 2"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0982b6ac0c4a0b7460832894241ba51279bd3f59dbacdf56d6734ecd0f297780?apiKey=42381fea584f4204ac9b9a56f9f64520&"
                  alt="Social Media Icon 3"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 shrink-0 self-center max-w-full h-px border border-solid border-neutral-200 w-[1057px]" />
        <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-px mt-1 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center py-12 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
              <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                <div className="text-base tracking-normal text-slate-800">
                  Company Info
                </div>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <div>About Us</div>
                  <div className="mt-2.5">Carrier</div>
                  <div className="mt-2.5">We are hiring</div>
                  <div className="mt-2.5">Blog</div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col font-bold w-[152px]">
                <div className="text-base tracking-normal text-slate-800">
                  Legal
                </div>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <div>About Us</div>
                  <div className="mt-2.5">Carrier</div>
                  <div className="mt-2.5">We are hiring</div>
                  <div className="mt-2.5">Blog</div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                <div className="text-base tracking-normal text-slate-800">
                  Features
                </div>
                <div className="flex flex-col mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <div>Business Marketing</div>
                  <div className="mt-2.5">User Analytic</div>
                  <div className="mt-2.5">Live Chat</div>
                  <div className="mt-2.5">Unlimited Support</div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col font-bold w-[152px]">
                <div className="text-base tracking-normal text-slate-800">
                  Resources
                </div>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <div>IOS & Android</div>
                  <div className="mt-2.5">Watch a Demo</div>
                  <div className="mt-2.5">Customers</div>
                  <div className="mt-2.5">API</div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
                <div className="text-base font-bold tracking-normal text-slate-800">
                  Get In Touch
                </div>
                <FormBlock />
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-center px-20 w-full text-sm font-bold tracking-wide leading-6 bg-neutral-50 text-neutral-500 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-start py-6 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden items-center max-w-full w-[600px]">
              <div className="overflow-hidden self-stretch my-auto min-w-[240px] w-[600px]">
                Made With Love By Finland All Right Reserved{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
