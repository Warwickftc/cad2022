/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  front_rightAsDcMotor.setDirection("REVERSE");
  back_rightAsDcMotor.setDirection("REVERSE");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    arm_servoAsServo.setPosition(0.94);
    linearOpMode.sleep(500);
    pulleyAsDcMotor.setPower(0.15);
    linearOpMode.sleep(500);
    front_leftAsDcMotor.setDualPower(0.6, back_rightAsDcMotor, 0.6);
    back_leftAsDcMotor.setDualPower(0.6, front_rightAsDcMotor, 0.6);
    linearOpMode.sleep(3000);
    front_leftAsDcMotor.setDualPower(0, back_rightAsDcMotor, 0);
    back_leftAsDcMotor.setDualPower(0, front_rightAsDcMotor, 0);
    pulleyAsDcMotor.setPower(0);
    linearOpMode.sleep(750);
    arm_servoAsServo.setPosition(0.7);
    linearOpMode.sleep(500);
    front_leftAsDcMotor.setDualPower(-0.3, back_rightAsDcMotor, -0.3);
    back_leftAsDcMotor.setDualPower(-0.3, front_rightAsDcMotor, -0.3);
    linearOpMode.sleep(800);
    front_leftAsDcMotor.setDualPower(0, back_rightAsDcMotor, 0);
    back_leftAsDcMotor.setDualPower(0, front_rightAsDcMotor, 0);
  }
}
