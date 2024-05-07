import Navbar from "../components/navbar";
import Upper from "../components/upper";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Website = () => {
  return (
    <div className="w-full relative bg-white h-[2250px] overflow-hidden">      
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[800px]">        
        <Navbar />
      </div>
      <main className="absolute top-[135px] left-[0px] flex flex-col items-center justify-start gap-[20px]">
        <div className="flex flex-col items-center justify-start gap-[62px]">
          <Upper />
          <FrameComponent />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Website;
