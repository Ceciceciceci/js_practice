//This code has bugs, fix it

/* {<body>
    <button>Click!</button>

<script>
    const counter = {
        cnt: 0,

        inc: function() {
            cnt++;
            console.log(cnt);
        }
    };

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', counter.inc(), false);

</script> }*/


//fixed it here
let cnt = 0;
const counter = {
    cnt: 0,
    inc: function(){
        this.cnt++; // this needs to be binded to counter
        console.log(this.cnt); //don't forget to this to bind here as well so it points to counter obj
    }
};

const button = document.querySelector('button');
button.addEventListener('click', counter.inc.bind(counter));