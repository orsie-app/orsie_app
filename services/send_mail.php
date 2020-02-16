<?php
function sendMail($name, $email)
{
    $to = "$email";
    $subject = "ORSIE Research Day Registration";
    $from = "ORSIE <appliedresearch@durhamcollege.ca>";
    $headers = "MIME-Version: 1.0" . "\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\n";
    $headers .= "From: $from" . "\n";

    $message = "Hello $name, <br><br>Thank you for registering for ORSIE Research Day 2020. See you at the event.<br><br>The ORSIE Team, <br>Durham College";

    // Sending email
    if (mail($to, $subject, $message, $headers)) {
        return 'The mail has been sent successfully.';
    } else {
        return 'Unable to send email. Please try again.';
    }
}
