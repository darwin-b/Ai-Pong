import React from 'react'

const Header = () => (
	<div className="seven columns header__main">
		<h4>TensorFlow.js implementation of a pong-playing AI</h4>
		<p>You are the bottom controller paddle, use arrow keys to move along the axis.</p>
		<p>I've implemented a deep neural network model using Keras with TensorFlow backend in Python 3. Saved those models, then converted into tfjs model, and now loaded the same model for a demo of the smartness of AI bot. </p>
		<p>Parameters considered are the positions of the ball and player in the current turn and the previous turn, a total of 8. Output is one-hot result, move-right, move-left or dont-move.</p>
		<table className="u-full-width">
			<tr>
				<th>Layer (Initial shape: 1x8, Final: 1x3)</th>
				<th>Number of output Units</th>
			</tr>
			<tr>
				<td>Dense Layer</td>
				<td>256</td>
			</tr>
			<tr>
				<td>Dense Layer</td>
				<td>512</td>
			</tr>
			<tr>
				<td>Dense Layer</td>
				<td>256</td>
			</tr>
			<tr>
				<td>Dense Layer</td>
				<td>3</td>
			</tr>	
		</table>
	    <div className="button__training">
	    	<button className="u-full-width">
	    		<a href="ponggame-fixed-strike-noai-collector.html">Training Simulation</a>
	    	</button>
	    </div>
	</div>
);

export default Header;



        // model.add(tf.layers.dense({units: 256, inputShape: [6]})); //input is a 1x8
        // //model.add(tf.layers.dense({units: 256, inputShape: [8]}));
        // model.add(tf.layers.dense({units: 512, inputShape: [256]}));
        // model.add(tf.layers.dense({units: 256, inputShape: [512]}));
        // model.add(tf.layers.dense({units: 3, inputShape: [256]})); //returns a 1x3
        // console.log('model created');