import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (


<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">


<div className="flex-1">
<img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
</div>


<div className="flex flex-1 flex-col">

<h2 className="mt-10 font-palanquin  capitalize text-4xl max-sm:text-[72px] lg:max-w-lg max-sm:leading-[82px] font-bold " >
  {/* We Provide You */}
  <br />

  <span className="text-coral-red   "> Special</span>
  <span className="text-coral-red   ">  </span> Offer
  <br />


</h2>

<p className="mt-4  lg:max-w-lg info-text " >Ensuring premium comfort and
  style, our meticulously crafted
  footwear is designed to elevate
  your experience, providing you
  with unmatched quality,
  innovation, and a touch of
  CaRS-F Tales
</p>

<p className="mt-6  lg:max-w-lg info-text  ">

  Our dedication to
  detail and excellence ensures your satisfaction
</p>

<div className="mt-11 flex flex-warp gap-4">

  <Button label="View details" />

{/* <Button  label="Shop now" iconURL={arrowRight}  /> */}

<Button label="Learn more" backgroundColor="bg-white"
borderColor="border-slate-gray"
textColor="text-slate-gray"
/>

</div>




</div>


</section>


   
  )
}

export default SpecialOffer