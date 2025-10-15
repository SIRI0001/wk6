import { DataTypes } from "sequelize";
import { sequelize } from "@/db/index";
export const Item = sequelize.define("Item", {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }
});