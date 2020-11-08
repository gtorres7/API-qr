const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema({
   teacherId: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true
   },
   attendats:[{
      type: String
   }]
})

sessionSchema.statics.findByTeacher = async (teacherId) => {
   // Search for session by teacher
   const session = await Session.findOne({ teacherId: teacherId } )
   if (!session) {
      throw new Error({ error: 'No hay sesion encontrada por ese maestro' })
   }
   return session
}

const Session = mongoose.model('Session', SessionSchema)

module.exports = Session