const deck = `
<svg class="cards-sprite" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
		<style>
			rect {
				width: 100%;
				height: 100%;
			}

			path { fill: #333; }

			[id^="h-"] path,
			[id^="d-"] path { fill: #900; }
		</style>
		<symbol id="s-2">
			<rect/>
			<text x="5" y="15">&#9824;2</text>
		</symbol>
		<symbol id="s-3">
			<rect/>
		 	<text x="5" y="15">&#9824;3</text>
		 </symbol>
		<symbol id="s-4">
			<rect/>
			<text x="5" y="15">&#9824;4</text>
		</symbol>
		<symbol id="s-5">
			<rect/>
			<text x="5" y="15">&#9824;5</text>
		</symbol>
		<symbol id="s-6">
			<rect/>
			<text x="5" y="15">&#9824;6</text>
		</symbol>
		<symbol id="s-7">
			<rect/>
			<text x="5" y="15">&#9824;7</text>
		</symbol>
		<symbol id="s-8">
			<rect/>
			<text x="5" y="15">&#9824;8</text>
		</symbol>
		<symbol id="s-9">
			<rect/>
			<text x="5" y="15">&#9824;9</text>
		</symbol>
		<symbol id="s-10">
			<rect/>
			<text x="5" y="15">&#9824;10</text>
		</symbol>
		<symbol id="s-j">
			<rect/>
			<text x="5" y="15">&#9824;J</text>
		</symbol>
		<symbol id="s-q">
			<rect/>
			<text x="5" y="15">&#9824;Q</text>
		</symbol>
		<symbol id="s-k">
			<rect/>
			<text x="5" y="15">&#9824;K</text>
		</symbol>
		<symbol id="s-a">
				<rect id="S-A" x="0" y="0" width="300" height="400"/>
				<path d="M150.106,135c1.83,7.604 4.646,14.398 8.448,20.382c3.802,5.984 10.578,13.394 20.329,22.23c9.751,8.835 15.929,15.612 18.534,20.329c2.605,4.717 3.907,9.504 3.907,14.362c0,6.759 -2.253,12.391 -6.759,16.897c-4.505,4.506 -9.997,6.759 -16.474,6.759c-5.491,0 -10.473,-1.708 -14.943,-5.122c-4.471,-3.415 -8.431,-8.396 -11.881,-14.943c0.071,10.349 1.426,18.568 4.066,24.658c2.64,6.09 6.864,10.878 12.673,14.363c5.808,3.485 13.535,5.544 23.18,6.178l0.739,3.907l-83.745,0l0.845,-3.907c12.954,0 23.005,-3.785 30.15,-11.353c7.146,-7.568 10.579,-18.85 10.297,-33.846c-3.168,6.688 -7.093,11.704 -11.775,15.048c-4.682,3.344 -9.98,5.017 -15.894,5.017c-6.336,0 -11.775,-2.289 -16.316,-6.865c-4.541,-4.576 -6.811,-10.067 -6.811,-16.474c0,-5.14 1.162,-9.786 3.485,-13.94c3.168,-5.773 8.307,-11.581 15.418,-17.425c7.111,-5.843 12.356,-10.666 15.735,-14.468c5.14,-5.843 8.889,-11.053 11.247,-15.629c2.359,-4.577 4.207,-9.962 5.545,-16.158Z"/>
				<path d="M34.603,53.338l7.516,-22.688l0.142,0l7.515,22.688l-15.173,0Zm21.442,18.592l8.299,0l-18.877,-51.93l-6.59,0l-18.877,51.93l8.335,0l3.989,-11.611l19.696,0l4.025,11.611Z"/>
				<path d="M265.397,346.662l-7.516,22.688l-0.142,0l-7.515,-22.688l15.173,0Zm-21.442,-18.592l-8.299,0l18.877,51.93l6.59,0l18.877,-51.93l-8.335,0l-3.989,11.611l-19.696,0l-4.025,-11.611Z"/>
		</symbol>
		<symbol id="c-2">
			<rect/>
			<text x="5" y="15">&#9827;2</text>
		</symbol>
		<symbol id="c-3">
			<rect/>
			<text x="5" y="15">&#9827;3</text>
		</symbol>
		<symbol id="c-4">
			<rect/>
			<text x="5" y="15">&#9827;4</text>
		</symbol>
		<symbol id="c-5">
			<rect/>
			<text x="5" y="15">&#9827;5</text>
		</symbol>
		<symbol id="c-6">
			<rect/>
			<text x="5" y="15">&#9827;6</text>
		</symbol>
		<symbol id="c-7">
			<rect/>
			<text x="5" y="15">&#9827;7</text>
		</symbol>
		<symbol id="c-8">
			<rect/>
			<text x="5" y="15">&#9827;8</text>
		</symbol>
		<symbol id="c-9">
			<rect/>
			<text x="5" y="15">&#9827;9</text>
		</symbol>
		<symbol id="c-10">
			<rect/>
			<text x="5" y="15">&#9827;10</text>
		</symbol>
		<symbol id="c-j">
			<rect/>
			<text x="5" y="15">&#9827;J</text>
		</symbol>
		<symbol id="c-q">
			<rect/>
			<text x="5" y="15">&#9827;Q</text>
		</symbol>
		<symbol id="c-k">
			<rect/>
			<text x="5" y="15">&#9827;K</text>
		</symbol>
		<symbol id="c-a">
			<rect/>
			<text x="5" y="15">&#9827;A</text>
		</symbol>
		<symbol id="h-2">
			<rect/>
			<text x="5" y="15">&#9829;2</text>
		</symbol>
		<symbol id="h-3">
			<rect/>
			<text x="5" y="15">&#9829;3</text>
		</symbol>
		<symbol id="h-4">
			<rect/>
			<text x="5" y="15">&#9829;4</text>
		</symbol>
		<symbol id="h-5">
			<rect/>
			<text x="5" y="15">&#9829;5</text>
		</symbol>
		<symbol id="h-6">
			<rect/>
			<text x="5" y="15">&#9829;6</text>
		</symbol>
		<symbol id="h-7">
			<rect/>
			<text x="5" y="15">&#9829;7</text>
		</symbol>
		<symbol id="h-8">
			<rect/>
			<text x="5" y="15">&#9829;8</text>
		</symbol>
		<symbol id="h-9">
			<rect/>
			<text x="5" y="15">&#9829;9</text>
		</symbol>
		<symbol id="h-10">
			<rect/>
			<text x="5" y="15">&#9829;10</text>
		</symbol>
		<symbol id="h-j">
			<rect/>
			<text x="5" y="15">&#9829;J</text>
		</symbol>
		<symbol id="h-q">
			<rect/>
			<text x="5" y="15">&#9829;Q</text>
		</symbol>
		<symbol id="h-k">
			<rect/>
			<text x="5" y="15">&#9829;K</text>
		</symbol>
		<symbol id="h-a">
			<rect/>
			<text x="5" y="15">&#9829;A</text>
		</symbol>
		<symbol id="d-2">
			<rect/>
			<text x="5" y="15">&#9830;2</text>
		</symbol>
		<symbol id="d-3">
			<rect/>
			<text x="5" y="15">&#9830;3</text>
		</symbol>
		<symbol id="d-4">
			<rect/>
			<text x="5" y="15">&#9830;4</text>
		</symbol>
		<symbol id="d-5">
			<rect/>
			<text x="5" y="15">&#9830;5</text>
		</symbol>
		<symbol id="d-6">
			<rect/>
			<text x="5" y="15">&#9830;6</text>
		</symbol>
		<symbol id="d-7">
			<rect/>
			<text x="5" y="15">&#9830;7</text>
		</symbol>
		<symbol id="d-8">
			<rect/>
			<text x="5" y="15">&#9830;8</text>
		</symbol>
		<symbol id="d-9">
			<rect/>
			<text x="5" y="15">&#9830;9</text>
		</symbol>
		<symbol id="d-10">
			<rect/>
			<text x="5" y="15">&#9830;10</text>
		</symbol>
		<symbol id="d-j">
			<rect/>
			<text x="5" y="15">&#9830;J</text>
		</symbol>
		<symbol id="d-q">
			<rect/>
			<text x="5" y="15">&#9830;Q</text>
		</symbol>
		<symbol id="d-k">
			<rect/>
			<text x="5" y="15">&#9830;K</text>
		</symbol>
		<symbol id="d-a">
			<rect/>
			<text x="5" y="15">&#9830;A</text>
		</symbol>
	</svg>
`;

export function get() {
    return deck;
}