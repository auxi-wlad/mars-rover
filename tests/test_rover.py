from mars_rover.rover import Rover


def test_start_at_position_0_0_N():
    rover = Rover()
    assert rover.execute("") == "0:0:N"


def test_have_position_2_3_N_when_navigated_with_MMRMMLM():
    rover = Rover()
    assert rover.execute("MMRMMLM") == "2:3:N"
