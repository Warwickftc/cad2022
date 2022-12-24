// IDENTIFIERS_USED=backleftAsDcMotor,backrightAsDcMotor,frontleftAsDcMotor,frontrightAsDcMotor,gamepad1,gamepad2

var pivot, vertical, horizontal;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  frontrightAsDcMotor.setDirection("REVERSE");
  backrightAsDcMotor.setDirection("REVERSE");
  frontleftAsDcMotor.setDirection("REVERSE");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      pivot = -9;
      vertical = -(0.65 * gamepad1.getLeftStickY());
      horizontal = 0.65 * gamepad1.getLeftStickX();
      horizontal = 0.65 * gamepad1.getRightStickX();
      frontrightAsDcMotor.setPower(-pivot + (vertical - horizontal));
      backrightAsDcMotor.setPower(-pivot + vertical + horizontal);
      frontleftAsDcMotor.setPower(pivot + vertical + horizontal);
      backleftAsDcMotor.setPower(pivot + (vertical - horizontal));
      if (gamepad2.getA()) {
        frontleftAsDcMotor.setPower(0.7);
      } else if (gamepad2.getB()) {
        frontrightAsDcMotor.setPower(-0.7);
      } else {
        backleftAsDcMotor.setPower(0);
      }
      telemetry.update();
    }
  }
}
