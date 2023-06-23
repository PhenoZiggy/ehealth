import User from '../models/user';
import Medical from '../models/medical';

export const getAll = async (req, res) => {
  try {
    const health = await User.find();
    res.status(200).json(health);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await User.find({ role: 'patient' });
    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  
  const user = req.body;

  if (!user) {
    return res.status(400).json({ message: 'Product is required' });
  }

  await User.create({
    name: user.name,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    role: user.role,
  })
    .then((doc) => {
      return res.status(200).json({ message: 'User created', doc });
    })
    .catch((err) => {
      return res.status(404).json({ message: 'Something went wrong', err });
    });
};

export const getUserDetails = async (req, res) => {
  const { email } = req.params;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userObj = {
      name: user.name,
      email: user.email,
      dateOfBirth: user.dateOfBirth.toLocaleDateString('en-US'),
    }
    // Get the medical history for the user
    const medicalHistory = await Medical.find({ patient: user._id })
      .populate('doctor')
      .exec();
   
    res.status(200).json({ ...userObj, medicalHistory });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};