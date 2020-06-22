class TimeService {
  public getServerTime(): number {
    return Math.round(Date.now() / 1000);
  }
}

export default TimeService;
