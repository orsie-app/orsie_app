<?php
function sendMailTemplate($name, $email)
{
    $to = "$email";
    $subject = "ORSIE Research Day Registration";
    $from = "ORSIE <appliedresearch@durhamcollege.ca>";
    $headers = "MIME-Version: 1.0" . "\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";
    $headers .= "From: $from" . "\n";

    $message = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta property="og:title" content="ORSIE Research Day Registration">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ORSIE Research Day Registration</title>

	<style type="text/css">
		p {
			margin: 10px 0;
			padding: 0;
		}

		table {
			border-collapse: collapse;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			display: block;
			margin: 0;
			padding: 0;
		}

		img,
		a img {
			border: 0;
			height: auto;
			outline: none;
			text-decoration: none;
		}

		body,
		#bodyTable,
		#bodyCell {
			height: 100%;
			margin: 0;
			padding: 0;
			width: 100%;
		}

		.mcnPreviewText {
			display: none !important;
		}

		#outlook a {
			padding: 0;
		}

		img {
			-ms-interpolation-mode: bicubic;
		}

		table {
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

		.ReadMsgBody {
			width: 100%;
		}

		.ExternalClass {
			width: 100%;
		}

		p,
		a,
		li,
		td,
		blockquote {
			mso-line-height-rule: exactly;
		}

		a[href^=tel],
		a[href^=sms] {
			color: inherit;
			cursor: default;
			text-decoration: none;
		}

		p,
		a,
		li,
		td,
		body,
		table,
		blockquote {
			-ms-text-size-adjust: 100%;
			-webkit-text-size-adjust: 100%;
		}

		.ExternalClass,
		.ExternalClass p,
		.ExternalClass td,
		.ExternalClass div,
		.ExternalClass span,
		.ExternalClass font {
			line-height: 100%;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: none !important;
			font-size: inherit !important;
			font-family: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
		}

		.templateContainer {
			max-width: 600px !important;
		}

		a.mcnButton {
			display: block;
		}

		.mcnImage,
		.mcnRetinaImage {
			vertical-align: bottom;
		}

		.mcnTextContent {
			word-break: break-word;
		}

		.mcnTextContent img {
			height: auto !important;
		}

		.mcnDividerBlock {
			table-layout: fixed !important;
		}

		h1 {
			color: #222222;
			font-family: Helvetica;
			font-size: 40px;
			font-style: normal;
			font-weight: bold;
			line-height: 150%;
			letter-spacing: normal;
			text-align: center;
		}

		h2 {
			color: #222222;
			font-family: Helvetica;
			font-size: 34px;
			font-style: normal;
			font-weight: bold;
			line-height: 150%;
			letter-spacing: normal;
			text-align: left;
		}

		h3 {
			color: #444444;
			font-family: Helvetica;
			font-size: 22px;
			font-style: normal;
			font-weight: bold;
			line-height: 150%;
			letter-spacing: normal;
			text-align: left;
		}

		h4 {
			color: #949494;
			font-family: Georgia;
			font-size: 20px;
			font-style: italic;
			font-weight: normal;
			line-height: 125%;
			letter-spacing: normal;
			text-align: center;
		}

		#templateHeader {
			background-color: #0b8261;
			background-image: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-top: 0;
			border-bottom: 0;
			padding-top: 54px;
			padding-bottom: 54px;
		}

		.headerContainer {
			background-color: transparent;
			background-image: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-top: 0;
			border-bottom: 0;
			padding-top: 0;
			padding-bottom: 0;
		}

		.headerContainer .mcnTextContent,
		.headerContainer .mcnTextContent p {
			color: #757575;
			font-family: Helvetica;
			font-size: 16px;
			line-height: 150%;
			text-align: left;
		}

		.headerContainer .mcnTextContent a,
		.headerContainer .mcnTextContent p a {
			color: #007C89;
			font-weight: normal;
			text-decoration: underline;
		}

		#templateBody {
			background-color: #FFFFFF;
			background-image: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-top: 0;
			border-bottom: 0;
			padding-top: 36px;
			padding-bottom: 54px;
		}

		.bodyContainer {
			background-color: transparent;
			background-image: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-top: 0;
			border-bottom: 0;
			padding-top: 0;
			padding-bottom: 0;
		}

		.bodyContainer .mcnTextContent,
		.bodyContainer .mcnTextContent p {
			color: #757575;
			font-family: Helvetica;
			font-size: 16px;
			line-height: 150%;
			text-align: left;
		}

		.bodyContainer .mcnTextContent a,
		.bodyContainer .mcnTextContent p a {
			color: #007C89;
			font-weight: normal;
			text-decoration: underline;
		}

		#templateFooter {
			background-color: #455560;
			background-image: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-top: 0;
			border-bottom: 0;
			padding-top: 45px;
			padding-bottom: 63px;
		}

		.footerContainer {
			background-color: transparent;
			background-image: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-top: 0;
			border-bottom: 0;
			padding-top: 0;
			padding-bottom: 0;
		}

		.footerContainer .mcnTextContent,
		.footerContainer .mcnTextContent p {
			color: #FFFFFF;
			font-family: Helvetica;
			font-size: 12px;
			line-height: 150%;
			text-align: center;
		}

		.footerContainer .mcnTextContent a,
		.footerContainer .mcnTextContent p a {
			color: #FFFFFF;
			font-weight: normal;
			text-decoration: underline;
		}

		@media only screen and (min-width:768px) {
			.templateContainer {
				width: 600px !important;
			}

		}

		@media only screen and (max-width: 480px) {
			body,
			table,
			td,
			p,
			a,
			li,
			blockquote {
				-webkit-text-size-adjust: none !important;
			}
		}

		@media only screen and (max-width: 480px) {
			body {
				width: 100% !important;
				min-width: 100% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnRetinaImage {
				max-width: 100% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImage {
				width: 100% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnCartContainer,
			.mcnCaptionTopContent,
			.mcnRecContentContainer,
			.mcnCaptionBottomContent,
			.mcnTextContentContainer,
			.mcnBoxedTextContentContainer,
			.mcnImageGroupContentContainer,
			.mcnCaptionLeftTextContentContainer,
			.mcnCaptionRightTextContentContainer,
			.mcnCaptionLeftImageContentContainer,
			.mcnCaptionRightImageContentContainer,
			.mcnImageCardLeftTextContentContainer,
			.mcnImageCardRightTextContentContainer,
			.mcnImageCardLeftImageContentContainer,
			.mcnImageCardRightImageContentContainer {
				max-width: 100% !important;
				width: 100% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnBoxedTextContentContainer {
				min-width: 100% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImageGroupContent {
				padding: 9px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnCaptionLeftContentOuter .mcnTextContent,
			.mcnCaptionRightContentOuter .mcnTextContent {
				padding-top: 9px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImageCardTopImageContent,
			.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
			.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
				padding-top: 18px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImageCardBottomImageContent {
				padding-bottom: 9px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImageGroupBlockInner {
				padding-top: 0 !important;
				padding-bottom: 0 !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImageGroupBlockOuter {
				padding-top: 9px !important;
				padding-bottom: 9px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnTextContent,
			.mcnBoxedTextContentColumn {
				padding-right: 18px !important;
				padding-left: 18px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnImageCardLeftImageContent,
			.mcnImageCardRightImageContent {
				padding-right: 18px !important;
				padding-bottom: 0 !important;
				padding-left: 18px !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcpreview-image-uploader {
				display: none !important;
				width: 100% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			h1 {
				font-size: 30px !important;
				line-height: 125% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			h2 {
				font-size: 26px !important;
				line-height: 125% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			h3 {
				font-size: 20px !important;
				line-height: 150% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			h4 {
				font-size: 18px !important;
				line-height: 150% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.mcnBoxedTextContentContainer .mcnTextContent,
			.mcnBoxedTextContentContainer .mcnTextContent p {
				font-size: 14px !important;
				line-height: 150% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.headerContainer .mcnTextContent,
			.headerContainer .mcnTextContent p {
				font-size: 16px !important;
				line-height: 150% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.bodyContainer .mcnTextContent,
			.bodyContainer .mcnTextContent p {
				font-size: 16px !important;
				line-height: 150% !important;
			}
		}

		@media only screen and (max-width: 480px) {
			.footerContainer .mcnTextContent,
			.footerContainer .mcnTextContent p {
				font-size: 14px !important;
				line-height: 150% !important;
			}
		}
	</style>
</head>

<body id="archivebody" style="height: 100%; margin: 0px; padding: 0px; width: 100%; text-size-adjust: 100%;">
	<!--[if !gte mso 9]><!----><span class="mcnPreviewText"
		style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">You
		are registered for the Research Day 2020</span>
	<!--<![endif]-->
	<!---->
	<center>
		<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable"
			style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
			<tbody>
				<tr>
					<td align="center" valign="top" id="bodyCell"
						style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
						<!-- BEGIN TEMPLATE // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%"
							style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
							<tbody>
								<tr>
									<td align="center" valign="top" id="templateHeader" data-template-container=""
										style="background:#0b8261 none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #0b8261;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 54px;padding-bottom: 54px;">
										<!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
											class="templateContainer"
											style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
											<tbody>
												<tr>
													<td valign="top" class="headerContainer"
														style="background:#transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0;padding-bottom: 0;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnImageBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
															<tbody class="mcnImageBlockOuter">
																<tr>
																	<td valign="top"
																		style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																		class="mcnImageBlockInner">
																		<table align="left" width="100%" border="0"
																			cellpadding="0" cellspacing="0"
																			class="mcnImageContentContainer"
																			style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																			<tbody>
																				<tr>
																					<td class="mcnImageContent"
																						valign="top"
																						style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">


																						<img align="center" alt=""
																							src="https://mullasuleman.com/test/dc-logo.png"
																							width="150"
																							style="max-width: 300px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
																							class="mcnRetinaImage">


																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
										<!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
									</td>
								</tr>
								<tr>
									<td align="center" valign="top" id="templateBody" data-template-container=""
										style="background:#FFFFFF none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 36px;padding-bottom: 54px;">
										<!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
											class="templateContainer"
											style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
											<tbody>
												<tr>
													<td valign="top" class="bodyContainer"
														style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0;padding-bottom: 0;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnTextBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
															<tbody class="mcnTextBlockOuter">
																<tr>
																	<td valign="top" class="mcnTextBlockInner"
																		style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																		<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

																		<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
																		<table align="left" border="0" cellpadding="0"
																			cellspacing="0"
																			style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																			width="100%"
																			class="mcnTextContentContainer">
																			<tbody>
																				<tr>

																					<td valign="top"
																						class="mcnTextContent"
																						style="padding: 0px 18px 9px;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #757575;font-size: 16px;line-height: 150%;text-align: left;">

																						<h2 class="null"
																							style="text-align: center;display: block;margin: 0;padding: 0;color: #222222;font-family: Helvetica;font-size: 34px;font-style: normal;font-weight: bold;line-height: 150%;letter-spacing: normal;">
																							<span
																								style="font-family:lato,helvetica neue,helvetica,arial,sans-serif">Awesome,
																								' . $name . '!</span></h2>

																						<div
																							style="text-align: center;">
																							You are registered for the
																							Research Day at Durham
																							College.</div>

																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--[if mso]>
				</td>
				<![endif]-->

																		<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnDividerBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
															<tbody class="mcnDividerBlockOuter">
																<tr>
																	<td class="mcnDividerBlockInner"
																		style="min-width: 100%;padding: 27px 18px 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																		<table class="mcnDividerContent" border="0"
																			cellpadding="0" cellspacing="0" width="100%"
																			style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																			<tbody>
																				<tr>
																					<td
																						style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																						<span></span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--            
                <td class="mcnDividerBlockInner" style="padding: 18px;">
                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
																	</td>
																</tr>
															</tbody>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnTextBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
															<tbody class="mcnTextBlockOuter">
																<tr>
																	<td valign="top" class="mcnTextBlockInner"
																		style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																		<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

																		<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
																		<table align="left" border="0" cellpadding="0"
																			cellspacing="0"
																			style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																			width="100%"
																			class="mcnTextContentContainer">
																			<tbody>
																				<tr>

																					<td valign="top"
																						class="mcnTextContent"
																						style="padding: 0px 18px 9px;color: #0B8261;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;font-size: 16px;line-height: 150%;text-align: left;">

																						<h3 class="null"
																							style="text-align: left;display: block;margin: 0;padding: 0;color: #444444;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 150%;letter-spacing: normal;">
																							<span
																								style="color:#0B8261">ORSIE
																								Research Day 2020</span>
																						</h3>

																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--[if mso]>
				</td>
				<![endif]-->

																		<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnTextBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
															<tbody class="mcnTextBlockOuter">
																<tr>
																	<td valign="top" class="mcnTextBlockInner"
																		style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																		<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

																		<!--[if mso]>
				<td valign="top" width="300" style="width:300px;">
				<![endif]-->
																		<table align="left" border="0" cellpadding="0"
																			cellspacing="0"
																			style="max-width: 300px;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																			width="100%"
																			class="mcnTextContentContainer">
																			<tbody>
																				<tr>

																					<td valign="top"
																						class="mcnTextContent"
																						style="padding: 0px 18px 9px;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #757575;font-size: 16px;line-height: 150%;text-align: left;">

																						<h3 class="null"
																							style="display: block;margin: 0;padding: 0;color: #444444;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 150%;letter-spacing: normal;text-align: left;">
																							When</h3>
																						Thursday. April 2, 2020<br>
																						From 4pm to 6pm
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--[if mso]>
				</td>
				<![endif]-->

																		<!--[if mso]>
				<td valign="top" width="300" style="width:300px;">
				<![endif]-->
																		<table align="left" border="0" cellpadding="0"
																			cellspacing="0"
																			style="max-width: 300px;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																			width="100%"
																			class="mcnTextContentContainer">
																			<tbody>
																				<tr>

																					<td valign="top"
																						class="mcnTextContent"
																						style="padding: 0px 18px 9px;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #757575;font-size: 16px;line-height: 150%;text-align: left;">

																						<h3 class="null"
																							style="display: block;margin: 0;padding: 0;color: #444444;font-family: Helvetica;font-size: 22px;font-style: normal;font-weight: bold;line-height: 150%;letter-spacing: normal;text-align: left;">
																							Where</h3>
																						Centre for Collaborative
																						Education,<br>
																						Durham College, Oshawa campus
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--[if mso]>
				</td>
				<![endif]-->

																		<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnDividerBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;table-layout: fixed !important;">
															<tbody class="mcnDividerBlockOuter">
																<tr>
																	<td class="mcnDividerBlockInner"
																		style="min-width: 100%;padding: 18px 18px 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																		<table class="mcnDividerContent" border="0"
																			cellpadding="0" cellspacing="0" width="100%"
																			style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																			<tbody>
																				<tr>
																					<td
																						style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																						<span></span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--            
                <td class="mcnDividerBlockInner" style="padding: 18px;">
                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
																	</td>
																</tr>
															</tbody>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnButtonBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
															<tbody class="mcnButtonBlockOuter">
																<tr>
																	<td style="padding-top: 0;padding-right: 18px;padding-bottom: 18px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																		valign="top" align="center"
																		class="mcnButtonBlockInner">
																		<table border="0" cellpadding="0"
																			cellspacing="0" width="100%"
																			class="mcnButtonContentContainer"
																			style="border-collapse: separate !important;border-radius: 0px;background-color: #0B8261;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																			<tbody>
																				<tr>
																					<td align="center" valign="middle"
																						class="mcnButtonContent"
																						style="font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 18px;padding: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																						<a class="mcnButton "
																							title="Event Schedule"
																							href="https://durhamcollege.ca/about/office-of-research-services-innovation-and-entrepreneurship-orsie/applied-research/research-day"
																							target="_blank"
																							style="font-weight: bold;letter-spacing: -0.5px;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;display: block;">Event
																							Schedule</a>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
										<!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
									</td>
								</tr>
								<tr>
									<td align="center" valign="top" id="templateFooter" data-template-container=""
										style="background:#455560 none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #455560;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 45px;padding-bottom: 63px;">
										<!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
											class="templateContainer"
											style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
											<tbody>
												<tr>
													<td valign="top" class="footerContainer"
														style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0;padding-bottom: 0;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%"
															class="mcnTextBlock"
															style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
															<tbody class="mcnTextBlockOuter">
																<tr>
																	<td valign="top" class="mcnTextBlockInner"
																		style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
																		<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->

																		<!--[if mso]>
				<td valign="top" width="300" style="width:300px;">
				<![endif]-->
																		<table align="left" border="0" cellpadding="0"
																			cellspacing="0"
																			style="max-width: 300px;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																			width="100%"
																			class="mcnTextContentContainer">
																			<tbody>
																				<tr>

																					<td valign="top"
																						class="mcnTextContent"
																						style="padding: 0px 18px 9px;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 12px;line-height: 125%;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #FFFFFF;">

																						<span
																							style="font-size:12px"><span
																								style="font-family:lato,helvetica neue,helvetica,arial,sans-serif">Durham
																								College<br>
																								2000 Simcoe St. N.<br>
																								Oshawa, ON, Canada L1G
																								0C5</span></span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--[if mso]>
				</td>
				<![endif]-->

																		<!--[if mso]>
				<td valign="top" width="300" style="width:300px;">
				<![endif]-->
																		<table align="left" border="0" cellpadding="0"
																			cellspacing="0"
																			style="max-width: 300px;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
																			width="100%"
																			class="mcnTextContentContainer">
																			<tbody>
																				<tr>

																					<td valign="top"
																						class="mcnTextContent"
																						style="padding: 0px 18px 9px;font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-size: 12px;line-height: 125%;text-align: left;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #FFFFFF;">

																						<span
																							style="font-size:12px">Tel:
																							905.721.2000<br>
																							Email:&nbsp;<a
																								href="mailto:dccares@durhamcollege.ca"
																								style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFFFFF;font-weight: normal;text-decoration: underline;">dccares@durhamcollege.ca</a></span><br>
																						<a href="https://durhamcollege.ca/"
																							target="_blank"
																							style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFFFFF;font-weight: normal;text-decoration: underline;">www.durhamcollege.ca</a>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<!--[if mso]>
				</td>
				<![endif]-->

																		<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
										<!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // END TEMPLATE -->
					</td>
				</tr>
			</tbody>
		</table>
	</center>
</body>

</html>';

    // Sending email

    // echo $message;
    if (mail($to, $subject, $message, $headers)) {
        return 'The mail has been sent successfully.';
    } else {
        return 'Unable to send email. Please try again.';
    }
}
