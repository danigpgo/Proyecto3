var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kpiSchema = new Schema({
  name: String,
  description: String,
  goal: Number,
  kpidata: [Number],
  id: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Kpi = mongoose.model('Kpi', kpiSchema);
module.exports = Kpi;
