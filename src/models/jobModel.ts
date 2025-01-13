import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Define an interface for Job attributes
interface JobAttributes {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}

// Define an interface for Job creation attributes (optional id)
interface JobCreationAttributes extends Optional<JobAttributes, "id"> {}

// Define a class that extends the Sequelize Model class
class Job extends Model<JobAttributes, JobCreationAttributes> implements JobAttributes {
  public id!: number;
  public title!: string;
  public company!: string;
  public location!: string;
  public salary!: number;
  public description!: string;
}

// Initialize the Job model
Job.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "jobs",
    sequelize, // passing the sequelize instance is required
  }
);

export default Job;
