import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User profile schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Profile schema
export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  location: text("location").notNull(),
  email: text("email").notNull(),
  github: text("github"),
  linkedin: text("linkedin"),
  twitter: text("twitter"),
  resume_url: text("resume_url"),
  profile_image: text("profile_image"),
});

export const insertProfileSchema = createInsertSchema(profile).omit({ id: true });

// Experience schema
export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  description: text("description").notNull(),
  date_range: text("date_range").notNull(),
  technologies: text("technologies").array().notNull(),
  order: integer("order").notNull(),
});

export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });

// Skills schema
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  items: text("items").array().notNull(),
});

export const insertSkillsSchema = createInsertSchema(skills).omit({ id: true });

// Education schema
export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
  description: text("description").notNull(),
  year: text("year").notNull(),
});

export const insertEducationSchema = createInsertSchema(education).omit({ id: true });

// Projects schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image_url: text("image_url"),
  technologies: text("technologies").array().notNull(),
  demo_link: text("demo_link"),
  code_link: text("code_link"),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

// Talks schema
export const talks = pgTable("talks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  event: text("event").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  slides_link: text("slides_link"),
  video_link: text("video_link"),
});

export const insertTalkSchema = createInsertSchema(talks).omit({ id: true });

// Articles schema
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  source: text("source").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  link: text("link"),
});

export const insertArticleSchema = createInsertSchema(articles).omit({ id: true });

// Type definitions
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type Profile = typeof profile.$inferSelect;

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experience.$inferSelect;

export type InsertSkills = z.infer<typeof insertSkillsSchema>;
export type Skills = typeof skills.$inferSelect;

export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof education.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertTalk = z.infer<typeof insertTalkSchema>;
export type Talk = typeof talks.$inferSelect;

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

// Certification table
export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issuer: text("issuer").notNull(),
  issue_date: text("issue_date").notNull(),
  credential_id: text("credential_id"),
  credential_url: text("credential_url"),
  skills: text("skills").array(),
  order: integer("order").default(1),
});

export const insertCertificationSchema = createInsertSchema(certifications).omit({ id: true });
export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type Certification = typeof certifications.$inferSelect;
