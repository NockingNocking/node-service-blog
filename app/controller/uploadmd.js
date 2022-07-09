"use strict";

const path = require("path");
const fs = require("mz/fs");

const Controller = require("egg").Controller;

class UploadmdController extends Controller {
  async upload() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    let result = await client.putStream("blog/222.jpg", stream, { headers });
    ctx.body = result;
  }
}

module.exports = UploadmdController;
