<template>
	<svg
		version="1.1"
		id="github"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 128 128"
		style="enable-background: new 0 0 128 128;"
		xml:space="preserve"
	>
		<path
			class="st0"
			d="M63.9,3.3C29.6,3.3,1.7,31.2,1.7,65.5c0,27.5,17.8,50.8,42.5,59c3.2,0.6,4.2-1.3,4.2-3c0-1.4-0.1-5.4-0.1-10.6
	c-17.3,3.7-21-8.4-21-8.4c-2.9-7.2-6.9-9.1-6.9-9.1c-5.6-3.8,0.4-3.7,0.4-3.7c6.2,0.4,9.6,6.4,9.6,6.4c5.5,9.5,14.6,6.7,18.1,5.2
	c0.6-3.9,2.2-6.7,3.9-8.4C38.5,91.3,23.9,86,23.9,62.2c0-6.8,2.5-12.3,6.4-16.7c-0.6-1.6-2.8-8,0.6-16.5c0,0,5.2-1.7,17.1,6.4
	c5-1.4,10.2-2.1,15.6-2.2c5.3,0,10.6,0.7,15.6,2.2c12-8.1,17.2-6.4,17.2-6.4c3.3,8.6,1.2,14.9,0.6,16.5c3.9,4.3,6.4,9.8,6.4,16.7
	c0,23.9-14.6,29.1-28.5,30.6c2.3,2,4.1,5.7,4.1,11.5c0,8.4-0.1,15-0.1,17.1c0,1.7,1.1,3.5,4.2,3c24.6-8.3,42.4-31.6,42.4-59
	C126.2,31.2,98.3,3.3,63.9,3.3z"
		/>
	</svg>
</template>

<script>
	export default {
		name: 'Github',
	}
</script>

<style lang="scss" scoped>
	svg {
		vertical-align: bottom;
		height: 2rem;
		width: 2rem;
		&:hover .st0 {
			fill: scale-color($color: #191717, $lightness: 10%);
		}
	}
	.st0 {
		fill-rule: evenodd;
		clip-rule: evenodd;
		fill: #191717;
	}
</style>
