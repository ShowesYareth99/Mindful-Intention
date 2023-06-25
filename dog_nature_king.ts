// File Name: IntentionSettingAndGoalAchievementServices.ts

// 1) Importing necessary modules
import { Goals,ActionItems,Timelines,Expectations,Outcomes } from "GoalServices";

// 2) Declaring the class for our services
export class IntentionSettingAndGoalAchievementServices {

  // 3) Declaring private static instance variables
  private static goals: Goals;
  private static actionItems: ActionItems;
  private static timelines: Timelines;
  private static expectations: Expectations;
  private static outcomes: Outcomes;

  // 4) Creating the constructor
  constructor() {
    this.goals = new Goals();
    this.actionItems = new ActionItems();
    this.timelines = new Timelines();
    this.expectations = new Expectations();
    this.outcomes = new Outcomes();
  }

  // 5) Creating public static functions
  public static setGoals(goals: Goals) {
    this.goals = goals;
  }

  public static setActionItems(actionItems: ActionItems) {
    this.actionItems = actionItems;
  }

  public static setTimelines(timelines: Timelines) {
    this.timelines = timelines;
  }

  public static setExpectations(expectations: Expectations) {
    this.expectations = expectations;
  }

  public static setOutcomes(outcomes: Outcomes) {
    this.outcomes = outcomes;
  }

  // 6) Creating public functions for the instance variables
  public getGoals(): Goals {
     return this.goals;
  }

  public getActionItems(): ActionItems {
     return this.actionItems;
  }

  public getTimelines(): Timelines {
    return this.timelines;
  }

  public getExpectations(): Expectations {
    return this.expectations;
  }

  public getOutcomes(): Outcomes {
    return this.outcomes;
  }

  // 7) Creating private functions for the instance variables
  private setGoals(goals: Goals): void {
    this.goals = goals;
  }

  private setActionItems(actionItems: ActionItems): void {
    this.actionItems = actionItems;
  }

  private setTimelines(timelines: Timelines): void {
    this.timelines = timelines;
  }

  private setExpectations(expectations: Expectations): void {
    this.expectations = expectations;
  }

  private setOutcomes(outcomes: Outcomes): void {
    this.outcomes = outcomes;
  }

  // 8) Creating public functions for CRUD operations
  public createGoal(goal: Goals): void {
    const retrievedGoals = this.getGoals();
    retrievedGoals.push(goal);
    this.setGoals(retrievedGoals);
  }

  public readGoals(): Goals {
    return this.getGoals();
  }

  public updateGoal(goalId: number, goal: Goals): void {
    const retrievedGoals = this.getGoals();
    retrievedGoals[goalId] = goal;
    this.setGoals(retrievedGoals);
  }

  public deleteGoal(goalId: number): void {
    const retrievedGoals = this.getGoals();
    retrievedGoals.splice(goalId, 1);
    this.setGoals(retrievedGoals);
  }

  public createActionItem(actionItem: ActionItems): void {
    const retrievedActionItems = this.getActionItems();
    retrievedActionItems.push(actionItem);
    this.setActionItems(retrievedActionItems);
  }

  public readActionItems(): ActionItems {
    return this.getActionItems();
  }

  public updateActionItem(actionItemId: number, actionItem: ActionItems): void {
    const retrievedActionItems = this.getActionItems();
    retrievedActionItems[actionItemId] = actionItem;
    this.setActionItems(retrievedActionItems);
  }

  public deleteActionItem(actionItemId: number): void {
    const retrievedActionItems = this.getActionItems();
    retrievedActionItems.splice(actionItemId, 1);
    this.setActionItems(retrievedActionItems);
  }

  public createTimeline(timeline: Timelines): void {
    const retrievedTimelines = this.getTimelines();
    retrievedTimelines.push(timeline);
    this.setTimelines(retrievedTimelines);
  }

  public readTimelines(): Timelines {
    return this.getTimelines();
  }

  public updateTimeline(timelineId: number, timeline: Timelines): void {
    const retrievedTimelines = this.getTimelines();
    retrievedTimelines[timelineId] = timeline;
    this.setTimelines(retrievedTimelines);
  }

  public deleteTimeline(timelineId: number): void {
    const retrievedTimelines = this.getTimelines();
    retrievedTimelines.splice(timelineId, 1);
    this.setTimelines(retrievedTimelines);
  }

  public createExpectation(expectation: Expectations): void {
    const retrievedExpectations = this.getExpectations();
    retrievedExpectations.push(expectation);
    this.setExpectations(retrievedExpectations);
  }

  public readExpectations(): Expectations {
    return this.getExpectations();
  }

  public updateExpectation(expectationId: number, expectation: Expectations): void {
    const retrievedExpectations = this.getExpectations();
    retrievedExpectations[expectationId] = expectation;
    this.setExpectations(retrievedExpectations);
  }

  public deleteExpectation(expectationId: number): void {
    const retrievedExpectations = this.getExpectations();
    retrievedExpectations.splice(expectationId, 1);
    this.setExpectations(retrievedExpectations);
  }

  public createOutcome(outcome: Outcomes): void {
    const retrievedOutcomes = this.getOutcomes();
    retrievedOutcomes.push(outcome);
    this.setOutcomes(retrievedOutcomes);
  }

  public readOutcomes(): Outcomes {
    return this.getOutcomes();
  }

  public updateOutcome(outcomeId: number, outcome: Outcomes): void {
    const retrievedOutcomes = this.getOutcomes();
    retrievedOutcomes[outcomeId] = outcome;
    this.setOutcomes(retrievedOutcomes);
  }

  public deleteOutcome(outcomeId: number): void {
    const retrievedOutcomes = this.getOutcomes();
    retrievedOutcomes.splice(outcomeId, 1);
    this.setOutcomes(retrievedOutcomes);
  }

}