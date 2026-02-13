class Set{
    constructor(weight = 0, time = 0, sets = 0, reps = 0, restTime = 0, current = False) {
        this.weight = weight;
        this.time = time;
        this.sets = sets;
        this.reps = reps;
        this.restTime = restTime;
        this.current = current;
    }

    getWeight() {
        return this.weight;
    }
    getTime() {
        return this.time;
    }
    getSets() {
        return this.sets;
    }
    getReps() {
        return this.reps;
    }
    getRest() {
        return this.restTime;
    }
    isCurrent() {
        return this.isCurrent;
    }

    toggleCurrent(){
        this.current = !this.current;
    }
    changeReps(newReps){
        this.reps = newReps;
    }
    changeWeight(newWeight){
        this.weight = newWeight;
    }
    changeSets(newSets){
        this.Sets = newSets;
    }
    changeRest(newRestTime){
        this.restTime = newRestTime;
    }

}
