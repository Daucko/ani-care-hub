import { GrLocation } from 'react-icons/gr';

const DogBoarding = () => {
  return (
    <main>
      <section className="flex gap-10">
        <article className="grid grid-cols-2 gap-10">
          <img
            src="/images/dog-boarding1.jpg"
            alt="boarding-pic1"
            width={400}
            height={400}
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250]"
          />
          <img
            src="/images/dog-boarding2.jpg"
            alt="boarding-pic1"
            width={400}
            height={400}
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250]"
          />
          <img
            src="/images/dog-boarding3.jpg"
            alt="boarding-pic1"
            width={400}
            height={400}
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250]"
          />
          <img
            src="/images/dog-boarding4.jpg"
            alt="boarding-pic1"
            width={400}
            height={400}
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250]"
          />
        </article>
        <article>
          <div className="w-[200px] h-[200px] rounded-full border border-red-500">
            <img
              src="/images/avatar1.webp"
              alt=""
              className="w-[100%] h-[100%] rounded-full object-cover"
            />
          </div>
          <h1>Dauda Tijani</h1>
          <div>
            <GrLocation />
            <p>8 london street, America, USA.</p>
          </div>
        </article>
      </section>
    </main>
  );
};
export default DogBoarding;
