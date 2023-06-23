import Medical from '../models/medical';

export const CreateMedical = async (req, res) => {
    const medical = req.body;
  
    if (!medical) {
      return res.status(400).json({ message: 'Product is required' });
    }
  
    await Medical.create({
      medicine: medical.medicine,
      doctor: medical.doctor,
      patient: medical.patient,
      amount: medical.amount,
      date  : medical.date
    })
      .then((doc) => {
        return res.status(200).json({ message: 'medical created', doc });
      })
      .catch((err) => {
        return res.status(404).json({ message: 'Something went wrong', err });
      });
  };

  export const getMedical = async (req, res) => {
    const medicalId = req.body.medicalId;
    try {
      const medical = await Medical.findOne({ _id: medicalId })
        .populate('doctor')
        .populate('patient')
        .exec();
      if (!medical) {
        return res.status(404).json({ error: 'Medical record not found' });
      }
      res.status(200).json(medical);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
