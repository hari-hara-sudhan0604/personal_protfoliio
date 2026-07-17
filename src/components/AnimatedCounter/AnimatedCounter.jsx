import CountUp from "react-countup";

function AnimatedCounter({

end,

suffix=""

}){

return(

<h2>

<CountUp

end={end}

duration={2}

/>

{suffix}

</h2>

);

}

export default AnimatedCounter;