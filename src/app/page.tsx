import Image from "next/image";

export default function Home() {
  return (
    // chat interface
    <>
      {/* navigation */}
      <nav>
        Navbar goes here
      </nav>

      {/* main componenets */}
      <main>

        {/* sidebar */}
        <section>
          sidebar
        </section>

        {/* chat interface */}
        <section>
          {/* welcome message and about description */}
          <div>
            greetings what is mediq
          </div>

          {/* input field */}
          <div>
            input field 
          </div>
        </section>
      </main>
    </>
  );
}
