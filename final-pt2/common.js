$(document).ready(function() {
	$('#more').click(function() {
		$('#details').fadeToggle(800);
	});
});

function writeheader () {
	document.write('<header> \
		<table style="background-color: white;"> \
			<tr> \
				<td class="cellleft"> \
				<div> \
					<div class="logo">\
						<a href="index.html"><img src="images/logo.png" alt="Chiave Logo" /></a>\
					</div> \
\
					<p class="animate__animated animate__bounce">Essentials</p>\
					<p class="purposetext">\
						...your key to manly soaps inspired by nature, handcrafted, \
						hand cut, made with love, high quality, natural and pure ingredients.\
					</p>\
				</div>\
				</td>\
				<td class="cellright">\
					<div>\
						<a href="https://www.instagram.com/chiave_essentials/">\
							<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 512 512">\
							<path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"> \
							</path>\
							<path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path>\
							<circle  cx="390.5" cy="121.5" r="30.2"></circle>\
						</svg></a>\
					</div>\
				</td>\
			</tr>\
		</table>\
		</header>\
	');
}

function writeshoplist () {
	document.write('\
			<ul>\
				<li><a href="anise.html">Anise</a></li>\
				<li><a href="bergamot.html">Bergamot</a></li>\
				<li><a href="cedarwood.html">Cedarwood</a></li>\
				<li><a href="cinnamon.html">Cinnamon</a></li>\
				<li><a href="exfoliating.html">Exfoliating</a></li>\
				<li><a href="floral.html">Floral</a></li>\
				<li><a href="minty.html">Minty</a></li>\
				<li><a href="woodsy.html">Woodsy</a></li>\
			</ul>\
');
}


function writefootertable() {
	document.write('\
	<table>\
		<tr>\
			<td rowspan="3">\
				<div class="footerlogo">\
					<a href="index.html"><img src="images/logo.png" alt="Chiave Essentials Logo" /></a>\
					<br /><span style="font-style:italic">Essentials</span> \
				</div>\
			</td>\
		</tr>\
		<tr>\
			<td>\
				<div>\
					<p style="margin-bottom: .3em;">Subscribe to our Newsletter</p>	\
					<form method="post" action="https://webdevbasics.net/scripts/demo.php">\
						<div>\
						<input type="email"\
							name="ContactEmail"\
							id="ContactEmail"\
							value=""\
							placeholder="email address"\
							aria-label="email address"\
							aria-required="true"\
							required="required"\
						>\
						<span>\
						<button type="submit" name="subscribe" >\
							<span>Subscribe</span>\
						</button>\
						</span>\
						</div>\
					</form>\
				</div>\
			</td>\
			<td rowspan="2">\
				<a href="contact.html">Contact Us</a><br /><br />\
				<span style="font-variant-position: super;">Follow us:</span>\
				<a href="https://www.instagram.com/chiave_essentials/"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 512 512">\
				<path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"></path>\
				<path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path>\
				<circle cx="390.5" cy="121.5" r="30.2"></circle>\
				</svg></a>\
				\
			</td>\
		</tr>\
		<tr>\
			<td>\
			<div style="padding-bottom: 2em;font-size: 80%;">\
				<span>\
				Copyright &#x000A9; 2020-2021 Chiave Essentials<br />\
				Plymouth, MI 48170<br />\
				Phone: (800) 555-2191\
				</span>\
			</div>\
			</td>\
		</tr>\
	</table>\
');
}