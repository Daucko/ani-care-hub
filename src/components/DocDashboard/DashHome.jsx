const DashHome = ({ name }) => {
  return (
    <main className="border-2 border-red-600">
      <header>Hello {name}</header>
      <section>
        <section>
          <article>
            <h1>Get Online Consultation!</h1>
            <p>Quick and convenient consultations without leaving home.</p>
            <div>
              <p>Book an Appointment</p>
              <GoArrowRight />
            </div>
          </article>
          <article>
            <h1>Get Doctor Home Visit!</h1>
            <p>
              Is your pet not feeling too well? Can't get it to the hospital?
              Invite a vet to your home!
            </p>
            <div>
              <p>Book an Appointment</p>
              <GoArrowRight />
            </div>
          </article>
        </section>
        <section></section>
      </section>
    </main>
  );
};
export default DashHome;
