var vertical, horizontal, pivot;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  front_rightAsDcMotor.setDirection("REVERSE");
  back_rightAsDcMotor.setDirection("REVERSE");
  pulleyAsDcMotor.setZeroPowerBehavior("BRAKE");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      vertical = -(0.65 * gamepad1.getLeftStickY());
      horizontal = 0.65 * gamepad1.getLeftStickX();
      pivot = 0.65 * gamepad1.getRightStickX();
      front_rightAsDcMotor.setPower(-pivot + (vertical - horizontal));
      back_rightAsDcMotor.setPower(-pivot + vertical + horizontal);
      front_leftAsDcMotor.setPower(pivot + vertical + horizontal);
      back_leftAsDcMotor.setPower(pivot + (vertical - horizontal));
      if (gamepad1.getDpadUp()) {
        pulleyAsDcMotor.setPower(0.4);
      } else if (gamepad1.getDpadDown()) {
        pulleyAsDcMotor.setPower(-0.1);
      } else {
        pulleyAsDcMotor.setPower(0);
      }
      if (gamepad1.getA()) {
        arm_servoAsServo.setPosition(0.7);
      } else if (gamepad1.getB()) {
        arm_servoAsServo.setPosition(0.94);
      }
      telemetry.update();
    }
  }
}
